import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";

import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";
import Login from './components/Login'
import setauthtoken from './utils/setauthtoken'
import Nav from './components/Nav';
import watchList from './components/watchlist'
import NewsCatcher from './components/newscatcher'
import PrivateRoute from './components/routing/PrivateRoute'
import {Provider} from 'react-redux';
import store from './store';
import register from "./components/register";
import ShowWatchList from "./components/ShowWatchList";
import Posts from "./components/Posts";
import CurrentUserPost from "./components/CurrentUserPost";
import ShowAllPosts from './components/ShowAllPosts'
import Readmore from './components/Readmore'




if (localStorage.token) {
  setauthtoken(localStorage.token)
}

const App = () => {
  
  return (
    <div className="container container0">
      <video src="media/Plexus.mp4" autoPlay muted loop ></video>
      
        <Provider store={store}>
          <WatchListContextProvider>
            <BrowserRouter>
              <Nav/>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={register} />
              <PrivateRoute path="/ShowAllPosts" component={ShowAllPosts}/>
              <PrivateRoute exact path="/ShowWatchlist" component={ShowWatchList}/>
              <PrivateRoute exact path="/NewsCatcher" component={NewsCatcher}/>
              <PrivateRoute exact path="/watchlist" component={watchList}/>
              <PrivateRoute exact path="/createPost" component={Posts}/>
              <PrivateRoute exact path = "/getpost" component={CurrentUserPost}/>
              <PrivateRoute exact path = "/readmore/:id" component={Readmore}/>
              <PrivateRoute path="/CoinSummary" component={CoinSummaryPage} />

              
              <Route path="/login" component={Login} />
              <Route path="/coins/:id" component={CoinDetailPage} />
            </BrowserRouter>
          </WatchListContextProvider>
      </Provider>

    </div>
  );
};

export default App;
