import React, { Component } from 'react'

 class Sign extends Component {

    // im creating some Login Handlers here because the handlers taking the input and processing the server side // 
     constructor() {
         super(); 
         this.state = {
             username :"",
             password :"",
             address  :"",
             phone    :"",
             dob      :""
            }
     }
     onSubmit = ()=> {
         const { username, password, dob,phone,address} = this.state;
         alert (" username  " + username + " password " + password + " dob " + dob + " phone " +phone + " address " + address);
     }
     onReset = () => {
         this.setState({
             username : "",
             password : "",
             address  : "",
             phone    : "",
             dob      : ""
         })
     }
     onChange = (event,field) => {
         this.setState({
             [field] :event.target.value
         })
     }
  render() {
      const { username, password, dob,phone,address} = this.state;
    return (
              <center>
              <div className="sign">
                <label>Username:</label>
                <input type="username" value = {username} onChange={(event) => {this.onChange(event,'username')}}/>
                <br/> <br/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(event) => {this.onChange(event,'password')}}/>
                <br/> <br/>
                <label>Address:</label>
                <input type="address" value ={address} onChange={(event) => {this.onChange(event,'address')}}/>
                <br/> <br/>
                <label>Phone:</label>
                <input type="phone" value ={phone} onChange={(event) => {this.onChange(event,'phone')}}/>
                <br/> <br/>
                <label>D.O.B </label>
                <input type="dob" value={dob} onChange = {(event) => {this.onChange(event,'dob')}}/>
                <br/> <br/>
                <button onClick= {this.onSubmit}>Submit</button>
                <button onClick= {this.onReset}>Reset</button> 
                
              </div>
              </center>
    )
  }
}
export default Sign;