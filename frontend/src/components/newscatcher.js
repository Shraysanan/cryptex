import React from 'react'
import axios from "axios";
var mywatchlistarray=["bitcoin","ethereum","dogecoin"];

const newscatcher = () => {
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
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
    return (
        <div>
            
        </div>
    )
}

export default newscatcher
