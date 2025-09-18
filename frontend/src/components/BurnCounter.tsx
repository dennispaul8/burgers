// components/BurnCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type BurnResponse = {
  burnt: number; // already human-readable (adjusted for decimals)
  symbol?: string;
  updatedAt?: string;
};

type Props = {
  apiUrl: string;
  sseUrl?: string | null;
  pollIntervalMs?: number; // default 15000
  decimalPlaces?: number;
  className?: string;
};

export default function BurnCounter({
  apiUrl,
  sseUrl = null,
  pollIntervalMs = 15000,
  decimalPlaces = 2,
  className = "",
}: Props) {
  const [value, setValue] = useState<number | null>(null);
  const [target, setTarget] = useState<number | null>(null);
  const [symbol, setSymbol] = useState<string | undefined>(undefined);
  const [updatedAt, setUpdatedAt] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const rafRef = useRef<number | null>(null);
  const prevRef = useRef<number>(0);
  const backoffRef = useRef<number>(0);

  // ✅ format WITHOUT dividing again
  const formatNumber = (n: number) => {
    if (Math.abs(n) >= 1_000_000_000)
      return (n / 1_000_000_000).toFixed(decimalPlaces) + "B";
    if (Math.abs(n) >= 1_000_000)
      return (n / 1_000_000).toFixed(decimalPlaces) + "M";
    if (Math.abs(n) >= 1_000) return (n / 1_000).toFixed(decimalPlaces) + "K";
    return n.toFixed(decimalPlaces);
  };

  const animateTo = (to: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = prevRef.current ?? 0;
    const duration = 700;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      setValue(current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = to;
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const fetchBurn = async () => {
    setLoading((s) => s || target === null);
    setError(null);
    try {
      const res = await fetch(apiUrl, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as BurnResponse;

      const newVal = Number(json.burnt);
      if (!Number.isFinite(newVal)) throw new Error("Invalid burnt value");

      setTarget(newVal);
      setSymbol(json.symbol);
      setUpdatedAt(json.updatedAt);

      animateTo(newVal);
      prevRef.current = newVal;
      setLoading(false);
      backoffRef.current = 0;
    } catch (err: any) {
      console.error("BurnCounter fetch error:", err);
      setError(err?.message ?? "Fetch error");
      backoffRef.current = Math.min(
        5 * 60 * 1000,
        (backoffRef.current || 1000) * 2 || 1000
      );
    }
  };

  useEffect(() => {
    let mounted = true;
    if (!apiUrl) return;

    fetchBurn();

    const tick = () => {
      if (!mounted) return;
      const nextDelay =
        backoffRef.current > 0 ? backoffRef.current : pollIntervalMs;
      const id = window.setTimeout(async () => {
        await fetchBurn();
        tick();
      }, nextDelay);
      return () => clearTimeout(id);
    };

    const cleanup = tick();

    return () => {
      mounted = false;
      cleanup && cleanup();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [apiUrl]);

  // SSE support (unchanged)
  useEffect(() => {
    if (!sseUrl) return;
    let es: EventSource | null = null;
    try {
      es = new EventSource(sseUrl);
      es.onmessage = (ev) => {
        try {
          const json = JSON.parse(ev.data) as BurnResponse;
          const newVal = Number(json.burnt);
          if (Number.isFinite(newVal)) {
            setTarget(newVal);
            setSymbol(json.symbol);
            setUpdatedAt(json.updatedAt);
            animateTo(newVal);
            prevRef.current = newVal;
            setLoading(false);
          }
        } catch (e) {
          console.warn("SSE parse error", e);
        }
      };
      es.onerror = (e) => {
        console.warn("SSE error", e);
        es?.close();
      };
    } catch (e) {
      console.warn("SSE init failed", e);
    }
    return () => es?.close();
  }, [sseUrl]);

  const showVal = value ?? target ?? 0;

  return (
    <div
      className={`bg-gray-900 rounded-2xl p-4 sm:p-6 w-full max-w-sm mx-auto text-center ${className}`}
    >
      <div className="text-lg md:text-xl font-semibold text-gray-400 uppercase tracking-wide mb-1">
        $BURGERS burnt
      </div>

      {/* Burning Burger Visual */}
      <div className="flex justify-center mb-6 relative burning-burger">
        <div className="relative inline-block">
          {/* Burger that burns */}
          <span className="text-7xl relative z-10 burning-burger">🍔</span>

          {/* Flames */}
          <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
            <div className="text-7xl flame">🔥</div>
          </div>
        </div>
      </div>

      <div className="flex items-baseline justify-center gap-2">
        <div className="text-3xl sm:text-4xl font-extrabold tabular-nums">
          {formatNumber(Math.round(showVal))}
        </div>
        <div className="text-sm sm:text-base text-gray-300 mt-1">
          {symbol ?? ""}
        </div>
      </div>

      <div className="mt-2 text-xs text-gray-400">
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            Loading...
          </span>
        ) : error ? (
          <span className="text-red-400">Error: {error}</span>
        ) : (
          <span>
            Updated {updatedAt ? new Date(updatedAt).toLocaleString() : "—"}
          </span>
        )}
      </div>

      {/* <div className="mt-3 text-xs text-gray-500">
        <small>
          Auto-updates every {Math.round(pollIntervalMs / 1000)}s · SSE
          supported
        </small>
      </div> */}
    </div>
  );
}
