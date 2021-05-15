import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
// import {getWatchList, putWatchList } from '../actions/watchlist'
import WatchlistItem from './WatchlistItem'
import { Fragment } from 'react';
// import watchlist from './watchlist'
import setauthtoken from '../utils/setauthtoken';


const ShowWatchList = () => {

    const  [watchlist, getWatchList] = useState('');
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid
        }
    }
    if(localStorage.token){
        setauthtoken(localStorage.token)
    }
    if(localStorage.userid){
        axios.defaults.headers.common['userid'] = localStorage.userid;  
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
    console.log('inside action',localStorage.userid,localStorage.token);
//get data from api
const url = 'http://localhost:5000/watchlist';
const getCurrentUserWatchlist = () => {
    axios.get(url, config).then((response) => {
        // console.log(response.data);
        const userwatchlist = response.data
        console.log(userwatchlist)
        getWatchList(userwatchlist);
    }).catch(error => console.log(`Error:${error}`))
}

useEffect(() => {
    getCurrentUserWatchlist();
}, [])

    return (
        <Fragment>
           <WatchlistItem watchlist={watchlist}/>
        </Fragment>
    )
}


export default (ShowWatchList)
