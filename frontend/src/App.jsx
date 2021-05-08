import React, {useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
// import Home from "./pages/Home"
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";
// import Landing from "./pages/Landing";
import Login from './components/Login'
// import Alert from './alerts/alert'
import setauthtoken from './utils/setauthtoken'
import {loaduser} from './actions/auth'
import Nav from './components/Nav';
import watchList from './components/watchlist'
//Redux
import {Provider} from 'react-redux';
import store from './store';
import register from "./components/register";



if (localStorage.token) {
  setauthtoken(localStorage.token)
}
  

const App = () => {
  useEffect( ()=>{
    store.dispatch(loaduser())
    // console.log('hello from dispatch')
  }, []);
  return (
    <div className="container container0">
      <video src="media/Plexus.mp4" autoPlay muted loop ></video>
      
        <Provider store={store}>
          <WatchListContextProvider>
            <BrowserRouter>
              <Nav/>
              <Header />
              {/* <Alert/> */}
              <Route exact path="/" component={Login} />
              <Route path="/register" component={register} />
              <Route path="/login" component={Login} />
              <Route path="/watchlist" component={watchList}/>
              <Route path="/CoinSummary" component={CoinSummaryPage} />
              <Route path="/coins/:id" component={CoinDetailPage} />
            </BrowserRouter>
          </WatchListContextProvider>
      </Provider>

    </div>
  );
};

export default App;
