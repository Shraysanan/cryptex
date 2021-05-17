import React, {useEffect, useState} from 'react'
import axios from "axios";
import setauthtoken from '../utils/setauthtoken';
import NewsCatcherItem from './NewsCatcherItem'
import {Link} from 'react-router-dom'
import watchlist from './watchlist';
import "./newscatcher.css"
// var mywatchlistarray=["bitcoin","ethereum","dogecoin"];


const NewsCatcher = () => {

var data
const  [mywatchlistarray, setWatchList] = useState([]);

const  [responseData, setresponseData] = useState([]);


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
        setWatchList(response.data);
        // setWatchList(...arr);
        console.log("after setting",mywatchlistarray)
    }).catch(error => console.log(`Error:${error}`))
}

useEffect(()=>{
  console.log("jdhdh",mywatchlistarray)
var mywatchliststring=mywatchlistarray.toString();
var mysearchstring=mywatchliststring.split(",").join(" ");
const options =  {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
  params: {q: mysearchstring, lang: 'en', media: 'True'},
  headers: {
    'x-rapidapi-key': '3f33cf7854msh3bc0ff7a7c8b66cp11bd4ejsn8da95c54107f',
    'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
  }
};
if(mywatchlistarray.length){
axios.request(options).then(function (response) {
    console.log(response.data.articles);
    data = response.data.articles;
    setresponseData(data);
    console.log(responseData);
    console.log('temp data',data)


}).catch(function (error) {
    console.error(error);
});
}
},[mywatchlistarray])

useEffect(() => {
getCurrentUserWatchlist();  
}, [])


   
      { if(mywatchlistarray.length != 0){
        return  (
          <div className="newsList row">
          <div className="col-12">
            <h1>NEWS UPDATES</h1>
          </div>
          <NewsCatcherItem responseData={responseData}/>
      </div>
        )
       }else{
         return(
           <>
            <h3>Please make a list first !</h3>
            <Link to="/watchlist"> Coin List</Link>
           </>
         )
       }
      }
      
     
    
      
//           {/* <NewsCatcherItem /> */}
//          { if(data.length){
//             return(
//               <h1>{data[0].summary}</h1>

          
//           )}else{
//               return (
//                 <h1>error</h1>
//               )
//             }
            
//         }
       
    
}

export default NewsCatcher
