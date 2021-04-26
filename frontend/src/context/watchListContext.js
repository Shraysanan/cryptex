import React, { createContext, useState, useEffect } from "react";
import store from '../store'

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  let mywatchList = [" bitcoin",
  "ethereum",
  "ripple",
  "litecoin"];
  localStorage.setItem("watchList", mywatchList)
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList").split(",") || [
      "bitcoin",
      "ethereum",
      "ripple",
      "litecoin",
    ]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }} store={store}>
      {props.children}
    </WatchListContext.Provider>
  );
};
