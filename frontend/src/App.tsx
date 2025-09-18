import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import Whitepaper from "./pages/Whitepaper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </>
  );
}

export default App;
