"use client";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  LucideCoins,
  LucideHeartHandshake,
  LucideFileText,
  LucideUsers,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TelegramLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-14 md:py-18 text-center relative overflow-hidden px-4">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 pointer-events-none"></div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <h1 className="text-5xl md:text-6xl font-extrabold md:mt-[-80px] sm:mt-[-20px] animate-pulse">
            🍔
          </h1>
          <h1 className="md:h-28 h-16 md:text-5xl text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-red-500 to-blue-400 bg-clip-text text-transparent drop-shadow-md animate-pulse">
            Burger Money
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt- text-lg sm:text-xl text-gray-300 max-w-md sm:max-w-xl mx-auto px-2">
          The most{" "}
          <span className="text-blue-400 font-semibold">delicious</span>{" "}
          deflationary token on{" "}
          <span className="text-red-400 font-semibold">Base</span>.
        </p>

        {/* CTA Button */}
        <Link
          to="https://flaunch.gg/base/coin/0x06a05043eb2c1691b19c2c13219db9212269ddc5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="cursor-pointer mt-8 bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-900 hover:to-blue-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-2xl font-bold shadow-lg  transition-transform hover:scale-105">
            🍔 Buy $Burgers
          </Button>
        </Link>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12 w-full max-w-md sm:max-w-2xl">
          {/* Oku.Trade */}
          <Link
            to="https://oku.trade/?inputChain=base&inToken=0x4200000000000000000000000000000000000006&outToken=0x06a05043eb2c1691b19c2c13219db9212269ddc5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4 bg-gray-900 p-4 sm:p-5 rounded-2xl border border-red-500/30 hover:border-blue-400/60 transition-all hover:scale-[1.02] shadow-md shadow-blue-500/10">
              <img
                src="https://burgermoney.xyz/wp-content/uploads/2025/08/img_2731.png"
                alt="Oku.Trade"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-blue-500/50"
              />
              <p className="text-gray-300 text-base sm:text-lg font-medium text-left">
                Trade <span className="text-blue-400 font-bold">$Burgers</span>{" "}
                on <span className="text-red-400 font-bold">Oku.Trade</span>
              </p>
            </div>
          </Link>

          {/* CoinGecko */}
          <Link
            to="https://www.coingecko.com/en/coins/burger-money"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4 bg-gray-900 p-4 sm:p-5 rounded-2xl border border-blue-400/30 hover:border-red-500/60 transition-all hover:scale-[1.02] shadow-md shadow-red-500/10">
              <img
                src="https://burgermoney.xyz/wp-content/uploads/2025/08/coingecko-logo-1.png?w=58"
                alt="CoinGecko"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-red-500/50"
              />
              <p className="text-gray-300 text-base sm:text-lg font-medium text-left">
                View <span className="text-blue-400 font-bold">$Burgers</span>{" "}
                on <span className="text-green-400 font-bold">CoinGecko</span>
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-8 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-red-500 via-blue-400 to-red-500 animate-gradient">
          <Card className="bg-gray-900 rounded-2xl shadow-lg border-none">
            <CardContent className="p-6 text-center">
              <LucideHeartHandshake
                size={40}
                className="mx-auto text-blue-400"
              />
              <h2 className="mt-4 text-2xl text-white font-bold">
                50% to Charity
              </h2>
              <p className="mt-2 text-gray-400">
                Revenue helps real people in need.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-red-500 via-blue-400 to-red-500 animate-gradient">
          <Card className="bg-gray-900 rounded-2xl shadow-lg border-none">
            <CardContent className="p-6 text-center">
              <LucideCoins size={40} className="mx-auto text-red-400" />
              <h2 className="mt-4 text-2xl text-white font-bold">
                50% Buybacks
              </h2>
              <p className="mt-2 text-gray-400">Burn tokens, increase value.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400">Meet the Founder</h2>
        <img
          src="/Louis.jpg"
          alt="Louis Founder of Burger Money"
          className="w-48 h-48 rounded-full mx-auto mt-6 object-cover"
        />
        <p className="mt-4 text-gray-300">
          Louis created Burger Money to merge crypto fun with real-world impact.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link className="" to="/donations">
            <Button className=" cursor-pointer bg-blue-500 text-black hover:bg-blue-600 text-white">
              Check Donations
            </Button>
          </Link>
          <Link to="/whitepaper">
            <Button className="cursor-pointer bg-blue-500 text-black hover:bg-blue-600 text-white">
              Read Whitepaper
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-950 relative overflow-hidden pb-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-blue-400 drop-shadow-md">
          Why $Burgers?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Community */}
          <Card className="bg-gray-900/90 backdrop-blur-sm p-8 text-center rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105">
            <LucideUsers size={44} className="mx-auto text-blue-400" />
            <h3 className="mt-5 text-2xl text-white font-bold">
              Community First
            </h3>
            <p className="text-gray-400 mt-3 text-lg">
              Built by the people, powered by the people. 🍔
            </p>
          </Card>

          {/* Deflationary */}
          <Card className="bg-gray-900/90 backdrop-blur-sm p-8 text-center rounded-2xl border border-red-500/20 shadow-lg hover:shadow-red-500/30 transition-all hover:scale-105">
            <LucideCoins size={44} className="mx-auto text-red-400" />
            <h3 className="mt-5 text-2xl text-white font-bold">Deflationary</h3>
            <p className="text-gray-400 mt-3 text-lg">
              Token burns 🔥 drive long-term growth & scarcity.
            </p>
          </Card>

          {/* Transparent */}
          <Card className="bg-gray-900/90 backdrop-blur-sm p-8 text-center rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105">
            <LucideFileText size={44} className="mx-auto text-blue-400" />
            <h3 className="mt-5 text-2xl text-white font-bold">Transparent</h3>
            <p className="text-gray-400 mt-3 text-lg">
              100% trackable donations & buybacks on-chain.
            </p>
          </Card>
        </div>
      </section>

      {/* Revenue Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-400 drop-shadow-md">
          $Burgers Revenue Model (BRM)🍔
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
          {/* Text Block */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Burger Money earns creator revenue from our launchpad{" "}
              <a
                href="https://flaunch.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 font-semibold hover:underline"
              >
                Flaunch.gg
              </a>
              . 50% of this revenue goes towards{" "}
              <span className="text-blue-400 font-bold">charities</span> that
              focus on feeding the hungry.
            </p>

            <p>
              The remaining 50% goes towards{" "}
              <span className="text-red-400 font-bold">buying back</span> and{" "}
              <span className="text-blue-400 font-bold">burning $Burgers</span>,
              making it the most delicious deflationary token on Base.
            </p>

            <p>
              Donations of{" "}
              <span className="text-blue-400 font-semibold">Ethereum</span> made
              to{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                BurgersOnBase.base.eth
              </code>{" "}
              follow the same model outlined above.
            </p>

            {/* CTA Button */}
            <Link
              to="https://flaunch.gg/base/coin/0x06a05043eb2c1691b19c2c13219db9212269ddc5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-6  cursor-pointer bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6 rounded-2xl font-bold shadow-lg transition-transform hover:scale-105">
                🍔 Buy $Burgers
              </Button>
            </Link>
          </div>

          {/* Fun Image */}
          <div className="flex justify-center">
            <img
              src="/brm-mascot.png"
              alt="Burger Mascot"
              className="w-full max-w-md object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        <div className="flex items-center gap-4 justify-center">
          <Link
            to="https://dexscreener.com/base/0xee99d2ccc718c58087ad2a5da6143e0aad073c5301cc8f51df186a53dcb6e439"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/dexscreener.jpg"
              alt="DexScreener Logo"
              className="w-12 h-12"
            />
          </Link>

          <Link
            to="https://x.com/BurgersOnBase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogoIcon size={44} color="#f7f7f7" weight="bold" />
          </Link>

          <Link
            to="https://t.me/BurgerMoneyBase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramLogoIcon size={44} color="#f7f7f7" weight="bold" />
          </Link>
        </div>

        <div className="mt-6 space-x-4 text-white text-lg ">
          <a
            href="https://zora.co/@burgersonbaseo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-blue-400 hover:text-blue-400 transition"
          >
            Zora
            <span className="absolute left-0 top-full mt-1 w-max text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
              NFT Drops & Marketplace
            </span>
          </a>
          <a
            href="https://farcaster.xyz/burgermoney"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-blue-400 hover:text-blue-400 transition"
          >
            Farcaster
            <span className="absolute left-0 top-full mt-1 w-max text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
              Decentralized Social
            </span>
          </a>
        </div>

        <div className="text-center mt-6">
          {" "}
          <p className="text-gray-300 text-lg">
            For inquiries:{" "}
            <a
              href="mailto:Hamburglar@BurgerMoney.xyz"
              className="text-blue-400"
            >
              Hamburglar@BurgerMoney.xyz
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
