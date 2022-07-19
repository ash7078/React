//import logo from './logo.svg';
//import './App.css';
import {GrSearch,GrFacebook} from "react-icons/gr";
import {BsFillCartCheckFill,BsFillChatRightTextFill,BsFillCreditCardFill,BsFillTelephoneFill,BsInstagram} from "react-icons/bs";
import {IconContext}from "react-icons";
function App() {
  return (
      <div>
      <h1 style ={{color:'red',textAlign:'center'}}> Coles</h1>
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
  );
}

export default App;
