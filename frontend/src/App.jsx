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
// import {loaduser} from './actions/auth'
import Nav from './components/Nav';
import watchList from './components/watchlist'
import NewsCatcher from './components/newscatcher'
import PrivateRoute from './components/routing/PrivateRoute'
//Redux
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
  // useEffect( ()=>{
  //   store.dispatch(loaduser())
  //   // console.log('hello from dispatch')
  // }, []);
  return (
    <div className="container container0">
      <video src="media/Plexus.mp4" autoPlay muted loop ></video>
      
        <Provider store={store}>
          <WatchListContextProvider>
            <BrowserRouter>
              <Nav/>
              {/* <Alert/> */}
              <Route exact path="/" component={Login} />
              <Route path="/register" component={register} />
              <PrivateRoute path="/ShowAllPosts" component={ShowAllPosts}/>
              {/* <Route path="/ShowWatchList" component={ShowWatchList} /> */}
              <PrivateRoute exact path="/ShowWatchlist" component={ShowWatchList}/>
              <PrivateRoute exact path="/NewsCatcher" component={NewsCatcher}/>
              <PrivateRoute exact path="/watchlist" component={watchList}/>
              <PrivateRoute exact path="/createPost" component={Posts}/>
              <PrivateRoute exact path = "/getpost" component={CurrentUserPost}/>
              <PrivateRoute exact path = "/readmore/:id" component={Readmore}/>

              
              {/* <Route path="/NewsCatcher" component={NewsCatcher} /> */}
              <Route path="/login" component={Login} />
              {/* <Route path="/watchlist" component={watchList}/> */}
              <Route path="/CoinSummary" component={CoinSummaryPage} />
              <Route path="/coins/:id" component={CoinDetailPage} />
            </BrowserRouter>
          </WatchListContextProvider>
      </Provider>

    </div>
  );
};

export default App;
