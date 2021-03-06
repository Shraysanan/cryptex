import React, { useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import {Link} from 'react-router-dom'
import Coin from "./Coin";
import axios from 'axios'
import "./CoinList.css"

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [watchList, setWatchList] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const config = {
    headers:{
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.token,
        'userid': localStorage.userid
    }
}
  const url = 'http://localhost:5000/watchlist';
  const getCurrentUserWatchlist = () => {
    axios.get(url, config).then((response) => {
        const userwatchlist = response.data
        console.log(userwatchlist)
        setWatchList(userwatchlist);
    }).catch(error => console.log(`Error:${error}`))
}

  useEffect(()=>{
    getCurrentUserWatchlist()
    
  },[])

  useEffect(() => {
    console.log("this is watchlist",watchList);
    watchList.join(",");
    
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids:watchList.join(","),
        },
      });
      console.log(response.data);
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
     
      
    }
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    else if(watchList.length === 0){
      return (
        <>
          <h3>Please make a list</h3>
          <Link to='/watchlist'>Make a list</Link>
        </>
      )
    }
   

    return (
      <ul className="coinlist list-group">
        {coins.map((coin) => {
          console.log(coin)
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
