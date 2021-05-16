import React,  {useEffect, useState, Fragment} from 'react'
import {history } from 'react-router-dom'
// import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import axios from 'axios'
import {connect, dispatch, useSelector} from 'react-redux'
import {getWatchList, putWatchList } from '../actions/watchlist'
import {GETWATCHLIST, WATHCLISTERROR} from '../actions/Types'
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import "./watchlist.css";

const initialState ={
  mywatchlist: [],
  loading: true,
  error:{}
}
const Watchlist = ({isAuthenticated,getWatchList,watchlist, putWatchList}) => {

  const history = useHistory()
  var mywatchlist = new Array();

  const [state, setState] = React.useState({
    checkedBitcoin: false,
    checkedEtherium: false,
    checkedDogeCoin: false,
    mywatchlist:[]
  });
  const {selectValue, setselectValue} = useState({
    mywatchlist:[]
  });
  const handleChange = (event) => {
    // console.log(mywatchlist)
    const checked = event.target.checked
    if(checked){
      const val = event.target.value
      mywatchlist.push(val)
    }else{
      var remove_element=mywatchlist.indexOf(event.target.value);
      let removed = mywatchlist.splice(remove_element,1)
    }
    console.log('updated' + mywatchlist)
  ;
  };
  
    function handleSubmit (e){
      e.preventDefault();
      
      putWatchList(mywatchlist)
      if(localStorage.userid){
       history.push('/CoinSummary');
    }
    }
    
    return (
        <Fragment>
          <div className="cont">
                <form className="items" onSubmit={handleSubmit}>
                  <h2>Select Cryptocurrencies to follow !</h2>
                  <FormControlLabel 
                    control={
                      <Checkbox
                        
                        onChange={handleChange}
                        name="checkedBitcoin"
                        color="primary"
                        value="bitcoin"
                      />
                    }
                    label={
                      <>
                          <img src="media/btc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                          <h4 className="textp"> BitCoin</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedEtherium"
                        color="primary"
                        value="ethereum"
                      />
                    }
                    label={
                      <>
                          <img src="media/eth.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                          <h4 className="textp"> Ethereum</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="ripple"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> ripple</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="tether"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> tether</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="bitcoin-cash"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> bitcoin-cash</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="litecoin"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> litecoin</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="eos"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> eos</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="okb"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> okb</h4>
  
                      </>
                    }
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedDogeCoin"
                        color="primary"
                        value="tezos"
                      />
                    }
                    label={
                      <>
                          <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                         <h4 className="textp"> tezos</h4>
  
                      </>
                    }
                  /><FormControlLabel 
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="checkedDogeCoin"
                      color="primary"
                      value="cardano"
                    />
                  }
                  label={
                    <>
                        <img src="media/dgc.png" className="profile-img" width="40px" height="auto" style={{ marginRight: "5px" }} />
                       <h4 className="textp"> cardano</h4>

                    </>
                  }
                />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    value="Submit"
                    type="submit"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>                  
                </form>


              {/* <form >
                  <select value={mywatchlist} onChange={handleChange} multiple={true}>
                    <option value="bitcoin">bitcoin</option>
                    <option value="etherium">etherium</option>
                    <option value="DogeCoin">DogeCoin</option>
                  </select>
                    <ul>
                    { 
                    }
                  </ul>  
                  <input type="submit" className="btn btn-primary" value="Submit"/>
              </form> */}
          </div>
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
