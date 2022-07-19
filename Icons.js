//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import {GrSearch,GrFacebook} from "react-icons/gr";
import {BsFillCartCheckFill,BsFillChatRightTextFill,BsFillCreditCardFill,BsFillTelephoneFill,BsInstagram} from "react-icons/bs";
import {IconContext}from "react-icons";
function Icons() {
  return (
    <div>
      <h1 style ={{color:'red',textAlign:'center'}}> Coles</h1>
      <div style ={{margin:'10px',textAlign : 'center', marginBottom : '10px'}}>
      <IconContext.Provider value={{size:'1rem'}}>
      <GrSearch/>
      <BsFillCartCheckFill style={{display:'inline',position:'relative'}}/>
      <BsFillChatRightTextFill/>
      <BsFillCreditCardFill/>
      <BsFillTelephoneFill/>
      <BsInstagram/>
      <GrFacebook/>
      </IconContext.Provider>
      </div>
    </div>
  );
}

export default Icons;
