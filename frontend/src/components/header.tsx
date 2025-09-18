"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react"; // for mobile toggle

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mx-auto sticky top-0 z-50 bg-blue-900/20 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl flex item-center font-extrabold text-blue-400 drop-shadow-md">
            Burger Money
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 ">
          <Link to="/donations">
            <Button className="py-6 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition shadow-md hover:shadow-blue-500/40">
              Check Donations
            </Button>
          </Link>
          <Link to="/whitepaper">
            <Button className="py-6 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition shadow-md hover:shadow-blue-500/40">
              Read Whitepaper
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-700 flex flex-col items-center gap-4 py-6">
          <Link
            to="/donations"
            className="w-11/12"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="w-full cursor-pointer bg-blue-500 text-white py-6 hover:bg-blue-600 transition">
              Check Donations
            </Button>
          </Link>
          <Link
            to="/whitepaper"
            className="w-11/12"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="w-full cursor-pointer bg-blue-500 text-white py-6 hover:bg-blue-600 transition">
              Read Whitepaper
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
