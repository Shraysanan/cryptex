import React,  {useEffect, useState, Fragment} from 'react'
// import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import axios from 'axios'
import {connect, dispatch} from 'react-redux'
import {getWatchList, putWatchList } from '../actions/watchlist'
import {GETWATCHLIST, WATHCLISTERROR} from '../actions/Types'
import PropTypes from 'prop-types';

const Watchlist = ({isAuthenticated, watchlist,getWatchList, putWatchList}) => {
  

  const {selectValue, setselectValue} = useState({
    mywatchlist:[]
  });
  // this.selectValue = this.selectValue.bind(this);
   useEffect(() => {
     getWatchList()

   }, [])
  

    function handleSubmit (e){
      e.preventDefault();
      
      console.log(mywatchlist)
      putWatchList(mywatchlist);

    }
    var mywatchlist = new Array();
    function handleChange(e){ 
      const val = e.target.value;
      // console.log(val)
      mywatchlist.push(val);
      // console.log(selectedOptions)
      // this.setselectValue( e.target.value);
    }
    // function renderList(){
    //   if(mywatchlist.length === 0){
    //     return null
    //   }else {
    //     return (
    //         mywatchlist.map(list => {
    //           <li>{list.value}</li>
    //       }) 
    //     )
    //   }
    // }
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
                  mywatchlist.map(list => {
                    return(
                    <li>{list.value}</li>

                    )
                  })
                  }
                </ul>  
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
           
        </Fragment>
    )
    }
Watchlist.propTypes = {
    // getwatchList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    watchlist: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,

};

const mapStateToProps = state => ({
    user_id:state.auth.userid,
    watchlist: state.watchlist,
    isAuthenticated: state.auth.isAuthenticated

})

export default connect(mapStateToProps, {getWatchList,putWatchList})(Watchlist)
