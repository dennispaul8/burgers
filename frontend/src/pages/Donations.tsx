"use client";

import { useEffect, useState } from "react";
import BurnCounter from "../components/BurnCounter";
import DonationCard, { type Donation } from "../components/donationCard";
import Header from "../components/header";

export default function Donations() {
  const totalEth = 0.073; // placeholder

  const [donationList, setDonationList] = useState<Donation[]>([]);

  const API_URL = "https://burger-money.onrender.com/api/burn";

  useEffect(() => {
    fetch("/data/donations.json")
      .then((res) => res.json())
      .then((data) => setDonationList(data));
  }, []);

  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans pb-6">
      {/* Header */}
      <Header />

      {/* Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto md:mt-28 mt-16">
        <div className="bg-gray-900 p-6 rounded-xl text-center mt-22">
          <h2 className="text-lg md:text-xl font-semibold text-gray-400">
            ETH Donated
          </h2>
          <p className="mt-2 text-xl md:text-3xl font-bold">
            {totalEth.toFixed(3)} ETH
          </p>
        </div>
        <BurnCounter
          apiUrl={API_URL}
          pollIntervalMs={20000}
          decimalPlaces={2}
        />
        <div className="bg-gray-900 p-6 rounded-xl text-center md:mt-22">
          <h2 className="text-lg md:text-xl font-semibold text-gray-400">
            Charities Supported
          </h2>
          <p className="mt-2 text-xl md:text-3xl font-bold">5</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="grid md:grid-cols-2 max-w-4xl mx-auto">
        {donationList.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </section>
    </main>
  );
}
