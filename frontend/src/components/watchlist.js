import React,  {useEffect, useState, Fragment} from 'react'
import {history } from 'react-router-dom'
// import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import axios from 'axios'
import {connect, dispatch, useSelector} from 'react-redux'
import {getWatchList, putWatchList } from '../actions/watchlist'
import {GETWATCHLIST, WATHCLISTERROR} from '../actions/Types'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

const initialState ={
  mywatchlist: [],
  loading: true,
  error:{}
}
const Watchlist = ({isAuthenticated,getWatchList,watchlist, putWatchList}) => {
  

  const {selectValue, setselectValue} = useState({
    mywatchlist:[]
  });

  // this.selectValue = this.selectValue.bind(this);
  //  useEffect(() => {
  //   const res = getWatchList().then(console.log('success'))
  //   res.then(
  //     console.log(res)
  //   )
  //   console.log(res);
  //  }, [])
  
    function handleSubmit (e){
      e.preventDefault();
      
      putWatchList(mywatchlist)
    }
    var mywatchlist = new Array();
    function handleChange(e){ 
      const val = e.target.value;
      // console.log(val)
      mywatchlist.push(val);
    }
   
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <select value={mywatchlist} onChange={handleChange} multiple={true}>
                  <option value="bitcoin">bitcoin</option>
                  <option value="etherium">etherium</option>
                  <option value="xyz">xyz</option>
                </select>
                  <ul>
                  { 
                  }
                </ul>  
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
           
        </Fragment>
    )
    }
Watchlist.propTypes = {
    getWatchList: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
    watchlist: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,

};

const mapStateToProps = state => ({
    user_id:state.auth.userid,
    watchlist: state.getWatchlist.mywatchlist,
    isAuthenticated: state.auth.isAuthenticated,
})


export default connect(mapStateToProps, {getWatchList,putWatchList})(Watchlist)
