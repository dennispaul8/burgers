"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import BurnCounter from "../components/BurnCounter";
import DonationCard, {} from "../components/donationCard";
import Header from "../components/header";
export default function Donations() {
    const totalEth = 0.073; // placeholder
    const [donationList, setDonationList] = useState([]);
    const API_URL = import.meta.env.MODE === "development"
        ? "/api/burn"
        : "https://burger-money.onrender.com/api/burn";
    useEffect(() => {
        fetch("/data/donations.json")
            .then((res) => res.json())
            .then((data) => setDonationList(data));
    }, []);
    return (_jsxs("main", { className: "min-h-screen bg-[#121212] text-white font-sans pb-6", children: [_jsx(Header, {}), _jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto md:mt-28 mt-16", children: [_jsxs("div", { className: "bg-gray-900 p-6 rounded-xl text-center mt-22", children: [_jsx("h2", { className: "text-lg md:text-xl font-semibold text-gray-400", children: "ETH Donated" }), _jsxs("p", { className: "mt-2 text-xl md:text-3xl font-bold", children: [totalEth.toFixed(3), " ETH"] })] }), _jsx(BurnCounter, { apiUrl: API_URL, pollIntervalMs: 20000, decimalPlaces: 2 }), _jsxs("div", { className: "bg-gray-900 p-6 rounded-xl text-center md:mt-22", children: [_jsx("h2", { className: "text-lg md:text-xl font-semibold text-gray-400", children: "Charities Supported" }), _jsx("p", { className: "mt-2 text-xl md:text-3xl font-bold", children: "5" })] })] }), _jsx("section", { className: "grid md:grid-cols-2 max-w-4xl mx-auto", children: donationList.map((donation) => (_jsx(DonationCard, { donation: donation }, donation.id))) })] }));
}
