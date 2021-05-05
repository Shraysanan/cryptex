import React,  {useEffect, useState, Fragment} from 'react'
// import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import axios from 'axios'
import {connect, dispatch} from 'react-redux'
import { putWatchList } from '../actions/watchlist'
import {GETWATCHLIST, WATHCLISTERROR} from '../actions/Types'
import PropTypes from 'prop-types';

const Watchlist = (auth, watchlist) => {
  

  const {selectValue, setselectValue} = useState({
    mywatchlist:[]
  });
  // this.selectValue = this.selectValue.bind(this);
  

    function handleSubmit (e){
      e.preventDefault();
      console.log("inside submit function")
      console.log(mywatchlist)
      putWatchList({mywatchlist})

    }
    var mywatchlist = new Array();
    function handleChange(e){
      const val = e.target.value;
      // console.log(val)
      mywatchlist.push(val);
      // console.log(selectedOptions)
      // this.setselectValue( e.target.value);
    }
    
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <select value={mywatchlist} onChange={handleChange} multiple={true}>
                  <option value="bitcoin">bitcoin</option>
                  <option value="etherium">etherium</option>
                  <option value="xyz">xyz</option>
                </select>
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
           
        </Fragment>
    )
    }
Watchlist.propTypes = {
    // getwatchList: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
    watchlist: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user_id:state.auth.userid,
    watchlist: state.watchlist
})

export default connect(mapStateToProps, {putWatchList})(Watchlist)
