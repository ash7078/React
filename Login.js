import React, { Component } from 'react'

 class Login extends Component {

    /// im using state method to handle the local data ////
     constructor() {
         super();
         this.state = {
                username :"",
                password :""
         }
     }
      /// creating handlers here because the handler thaking the input and process the request ////
     onLogin = () =>{
         const { username, password } = this.state;
          alert(" username" + username + " password" + password);
     }

     onReset = () => {
         this.setState({ 
                   username :"",
                   password : ""
        });
     }

     onChange = (event,field) => {
         this.setState({
             [field] :event.target.value
         });
     }

    render() {
      /// im deconstructing the state values /////
        const { username, password } = this.state;
        return (   
          <center>
            <div className ="login">
                
            
               <h2> Login Page</h2>
               <label>Username:</label>
               <input type="username" value ={username} onChange={(event) => {this.onChange(event,'username')}}/>
               <br/> <br/>
               <label>Password : </label>
               <input type="password" value = {password} onChange={(event) => {this.onChange(event,'password')}}/>
               <br/> <br/>
               
               <button onClick={this.onLogin}>Login</button>
               <button onClick={this.onReset}>Reset</button>
              
            </div>
          </center>
        )
    }
}
export default Login;