import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-center text-warning mt-3 mb-4">PawnCoin</h1>
      <Link to='/CoinSummary'>Coin Summary</Link>

    </div>
  );
};

export default Header;
