// server.ts
import "dotenv/config";
import express from "express";
import fetch from "node-fetch"; // make sure node-fetch is installed
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

// Token + burn wallet
const TOKEN_ADDRESS = "0x06A05043eb2C1691b19c2C13219dB9212269dDc5";
const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";

interface EtherscanResponse {
  status: string;
  message: string;
  result: string;
}

// allow frontend requests
app.use(
  cors({
    origin: "https://burgers-weld.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// parse JSON
app.use(express.json());

// Fetch burnt supply
app.get("/api/burn", async (_req, res) => {
  try {
    const url = `https://api.etherscan.io/v2/api?chainid=8453&module=account&action=tokenbalance&contractaddress=${TOKEN_ADDRESS}&address=${BURN_ADDRESS}&tag=latest&apikey=${ETHERSCAN_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Etherscan error ${response.status}`);
    }

    const data = (await response.json()) as EtherscanResponse;

    if (data.status !== "1") {
      throw new Error(`Etherscan returned error: ${data.message}`);
    }

    const burnt = Number(data.result) / 1e18;

    res.json({
      burnt,
      symbol: "BURGERS",
      updatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("🔥 Error in /api/burn:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
