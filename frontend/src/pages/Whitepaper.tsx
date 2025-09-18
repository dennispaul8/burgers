"use client";

import Header from "../components/header";

// import Header from "@/components/header";

export default function Whitepaper() {
  return (
    <>
      <main className="min-h-screen bg-[#121212] text-white font-sans space-y-16">
        <Header />

        {/* Hero */}
        <section className="text-center md:mt-22">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-400">
            $Burgers Whitepaper
          </h1>
          <p className="mt-2 text-gray-300">
            The 'most delicious deflationary token on Base,' now feeding hope
            too.
          </p>
        </section>

        {/* Basics */}
        <section className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold">Token Overview</h2>
          <p>
            <strong>Ticker:</strong> $Burgers
          </p>
          <p className="flex flex-wrap items-center">
            <strong className="mr-2">Contract Address:</strong>
            <code className="bg-gray-800 p-1 rounded break-all">
              0x06a05043eb2c1691b19c2c13219db9212269ddc5
            </code>
          </p>
          <p>
            <strong>Founder:</strong> Louis S. (Panhandle, Florida)
          </p>
          <p>
            <strong>Origin:</strong> Started as a meme shared with friends—then
            pivoted into a charity token by community support.
          </p>
        </section>

        {/* Philosophy */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Our Philosophy</h2>
          <p>
            At $Burgers on Base, we believe that true progress is measured by
            the lives we touch and the hope we bring. Our mission goes beyond
            crypto—it is a commitment to humanity. <br />
            <br />
            Every Human Deserves a Life of Dignity: Religion, language, or
            background doesn’t matter. Every person deserves care, respect, and
            the opportunity to live an honorable life.
            <br /> <br /> Every Child Deserves a Future: No child should suffer
            from hunger, fear, or lack of education. Every child deserves
            nutrition, safety, and empowerment.
            <br /> <br />
            Transparency Builds Trust: Every donation and initiative is fully
            transparent. We don’t just assume trust—we build it.
            <br />
            <br /> Compassion, equality, and the right to live an honorable life
            are not privileges—they are the rights of all.
          </p>
        </section>

        {/* Roadmap */}
        <section className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <p>
            <strong>50% to Charity, 50% to Buybacks & Burns</strong> — executed
            every <strong>Sunday</strong>.
          </p>
          <p>
            Over time, the plan is to shift more revenue toward donations,
            driven by grassroots growth and meaningful community collaboration.
          </p>
        </section>

        {/* Supply */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Token Supply</h2>
          <p className="mt-4 text-gray-300">
            Total Supply: <strong>100 Billion</strong> $Burgers. Over{" "}
            <strong>5.5%</strong> already burned and held in the Ethereum dead
            wallet, ensuring real deflationary pressure.
          </p>
        </section>

        {/* Links & Contact */}
        <section className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold">Quick Links & Contact</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-blue-400">
            <li>
              <a
                href="https://burgermoney.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </li>
            <li>
              <a
                href="https://flaunch.gg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flaunch
              </a>
            </li>
            <li>
              <a
                href="https://x.com/BurgersOnBase"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://t.me/BurgerMoneyBase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://zora.co/@burgersonbaseo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zora
              </a>
            </li>
            <li>
              <a
                href="https://farcaster.xyz/burgermoney"
                target="_blank"
                rel="noopener noreferrer"
              >
                Farcaster
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Burgers_Louis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Louis' X
              </a>
            </li>
            <li>
              <a
                href="https://www.coingecko.com/en/coins/burger-money"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoinGecko
              </a>
            </li>
            <li>
              <a
                href="https://dexscreener.com/base/0xee99d2ccc718c58087ad2a5da6143e0aad073c5301cc8f51df186a53dcb6e439"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dexscreener
              </a>
            </li>
            <li>
              <a
                href="https://t.co/1uS6L1RM9s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/w5Dvuu5ngG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.geckoterminal.com/base/pools/0xee99d2ccc718c58087ad2a5da6143e0aad073c5301cc8f51df186a53dcb6e439"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeckoTerminal
              </a>
            </li>
          </ul>
        </section>
        <div className="text-center">
          {" "}
          <p className="text-gray-300">
            For inquiries:{" "}
            <a
              href="mailto:Hamburglar@BurgerMoney.xyz"
              className="text-blue-400"
            >
              Hamburglar@BurgerMoney.xyz
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
