import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
        events?: {
          bind: (
            event: string,
            cb: (e: { target: HTMLElement }) => void
          ) => void;
          unbind?: (
            event: string,
            cb: (e: { target: HTMLElement }) => void
          ) => void;
        };
      };
    };
  }
}

export type Donation = {
  id: number;
  tweetUrl: string;
  date?: string;
  content?: string;
  txLinks?: { label: string; url: string }[];
  charityLogo?: string;
  qr?: string;
};

export default function DonationCard({ donation }: { donation: Donation }) {
  const [loading, setLoading] = useState(!!donation.tweetUrl);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!donation.tweetUrl) return;

    let mounted = true;
    let obs: MutationObserver | null = null;
    let fallbackTimer: number | null = null;

    // Handler for twttr "rendered" event
    const handleRendered = (event: { target: HTMLElement }) => {
      if (!mounted) return;
      const container = containerRef.current;
      console.debug("twttr.rendered event:", event.target);
      if (container && container.contains(event.target)) {
        setLoading(false);
        cleanup();
      }
    };

    // cleanup function
    const cleanup = () => {
      // disconnect mutation observer
      if (obs) {
        obs.disconnect();
        obs = null;
      }
      // clear fallback timer
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
      // try to unbind (guarded)
      try {
        if (window.twttr?.widgets?.events?.unbind) {
          window.twttr.widgets.events.unbind("rendered", handleRendered);
        }
      } catch (e) {
        // ignore unbind errors
        console.debug("unbind error", e);
      }
    };

    // Ensure twitter script is present and resolved as a Promise
    const ensureTwitter = (): Promise<void> =>
      new Promise((resolve) => {
        if (window.twttr && window.twttr.widgets) {
          return resolve();
        }

        const existing = document.querySelector(
          "#twitter-wjs"
        ) as HTMLScriptElement | null;

        if (existing) {
          // if script exists but twttr not ready, wait for its load event
          if ((existing.getAttribute("data-loaded") || "") === "1") {
            return resolve();
          }
          const onLoad = () => {
            existing.removeEventListener("load", onLoad);
            existing.setAttribute("data-loaded", "1");
            resolve();
          };
          existing.addEventListener("load", onLoad);
          // if already failed/loaded previously, resolve anyway after small tick
          setTimeout(() => {
            if (window.twttr && window.twttr.widgets) resolve();
          }, 50);
        } else {
          const script = document.createElement("script");
          script.id = "twitter-wjs";
          script.src = "https://platform.twitter.com/widgets.js";
          script.async = true;
          script.addEventListener("load", () => {
            script.setAttribute("data-loaded", "1");
            // slight delay to let twttr initialize
            setTimeout(() => resolve(), 50);
          });
          script.addEventListener("error", () => {
            // even on error, resolve so we don't hang forever
            console.warn("Twitter widgets.js failed to load");
            resolve();
          });
          document.body.appendChild(script);
        }
      });

    ensureTwitter().then(() => {
      if (!mounted) return;

      const container = containerRef.current;
      try {
        // instruct twttr to scan this container (or whole page)
        window.twttr?.widgets?.load(container || undefined);
      } catch (e) {
        console.debug("widgets.load error", e);
      }

      // immediate quick-check: maybe the embed already rendered
      const alreadyRendered =
        !!container &&
        (!!container.querySelector('iframe[src*="twitter.com"]') ||
          !!container.querySelector(".twitter-tweet-rendered"));

      if (alreadyRendered) {
        setLoading(false);
        return;
      }

      // try binding rendered event (guarded)
      try {
        if (window.twttr?.widgets?.events?.bind) {
          window.twttr.widgets.events.bind("rendered", handleRendered);
        }
      } catch (e) {
        console.debug("bind error", e);
      }

      // MutationObserver fallback — watch for iframe insertion
      obs = new MutationObserver(() => {
        if (!mounted) return;
        const c = containerRef.current;
        if (
          c &&
          (c.querySelector('iframe[src*="twitter.com"]') ||
            c.querySelector(".twitter-tweet-rendered"))
        ) {
          console.debug("MutationObserver: embed detected");
          setLoading(false);
          cleanup();
        }
      });

      if (container) {
        obs.observe(container, { childList: true, subtree: true });
      }

      // ultimate fallback: hide spinner after N seconds so it never runs forever
      fallbackTimer = window.setTimeout(() => {
        if (!mounted) return;
        console.warn("Twitter embed fallback timeout — hiding spinner");
        setLoading(false);
        cleanup();
      }, 10000); // 10s timeout
    });

    return () => {
      mounted = false;
      cleanup();
    };
  }, [donation.tweetUrl]);

  return (
    <div
      ref={containerRef}
      className="bg-none rounded-xl p-4 sm:p-6 w-full max-w-md mx-auto text-center overflow-hidden"
    >
      {/* Tweet embed */}
      {donation.tweetUrl ? (
        <>
          {loading && (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
            </div>
          )}
          <div className="w-full max-w-full">
            <blockquote
              className="twitter-tweet w-full"
              data-theme="dark"
              style={{
                display: loading ? "none" : "block",
                margin: 0,
              }}
            >
              <a href={donation.tweetUrl}></a>
            </blockquote>
          </div>
        </>
      ) : (
        <p className="text-gray-200 mb-3 whitespace-pre-line text-sm sm:text-base break-words">
          {/* {donation.content} */}
        </p>
      )}
    </div>
  );
}
