import React from "react";
import CoinList from "../components/CoinList";
import "./CoinSummaryPage.css"

const CoinSummaryPage = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded csp">

      <h1> Data Summary </h1>

      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;
