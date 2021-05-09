import React, {useEffect, useState} from 'react'
import axios from "axios";
import setauthtoken from '../utils/setauthtoken';
import NewsCatcherItem from './NewsCatcherItem'
// var mywatchlistarray=["bitcoin","ethereum","dogecoin"];


const NewsCatcher = () => {

  
const  [mywatchlistarray, setWatchList] = useState([]);

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
const url = 'http://localhost:5000/watchlist';
const getCurrentUserWatchlist = () => {
    axios.get(url, config).then((response) => {
        console.log(response.data);
        const arr = response.data;
        console.log('temp arr',arr)
        setWatchList(response.data);
        // setWatchList(...arr);
        console.log("after setting",mywatchlistarray)
    }).catch(error => console.log(`Error:${error}`))
}

useEffect(()=>{
  console.log("jdhdh",mywatchlistarray)
var mywatchliststring=mywatchlistarray.toString();
var mysearchstring=mywatchliststring.split(",").join(" ");
const options = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  params: {q: mysearchstring, lang: 'en', page: '1', page_size: '25'},
  headers: {
    'x-rapidapi-key': '3f33cf7854msh3bc0ff7a7c8b66cp11bd4ejsn8da95c54107f',
    'x-rapidapi-host': 'free-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data.articles);
}).catch(function (error) {
    console.error(error);
});
},[mywatchlistarray])

useEffect(() => {
getCurrentUserWatchlist();  
}, [getCurrentUserWatchlist])


    return (
        <div>
            <NewsCatcherItem newsItem={mywatchlistarray}/>
        </div>
    )
}

export default NewsCatcher
