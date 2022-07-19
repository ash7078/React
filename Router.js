 import React, { Component } from 'react';
 import{Route,BrowserRouter} from 'react-router-dom';

//import{Link,Switch,Route,BrowserRouter as Router} from 'react-router-dom';


import Login from    './Components/auth/Login'
import Sign from     './Components/auth/Sign';
//import Slider from   './Components/Layout/Slider';
import Header from   './Components/Layout/Header';
import Footer from   './Components/Layout/Footer';
import Home from     './Components/Layout/Home';
import Customer from './Components/Layout/Customer';
import Products from './Components/Layout/Products';
//import Icons from    './Components/Layout/Icons';
import List from './Components/Layout/List';
 class Router extends Component {
  render() {
    return (
         <div>
            <BrowserRouter>
                <Header/>
                    <Route exact path = "/" component={Home}/>
                    <Route path ="/home"    component={Home}/>
                    <Route path ="/login"   component={Login}/>
                    <Route path ="/sign"    component={Sign}/>
                    <Route path ="/customer"component={Customer}/>
                    <Route path ="/products"component={Products}/>
                    {/* <Route path ="/slider"  component={Slider}/>
                    <Route path ="/icons"   component={Icons}/> */}
                    <Route path ="/list" component={List}/>
                <Footer/>
            </BrowserRouter> 
         </div> 
    )
  }
}
export default Router;














