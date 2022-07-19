 import React ,{ Component } from 'react';
 import {withRouter} from 'react-router-dom';
 import '../../styless.css';
   
 class Header extends Component {

  // im creariong a history object.the history obeject force the router to one component to another component //
     onNavigation = (path) => {
        this.props.history.push(path);
     }
  render() {
    return (
      <div className="header">    
              <navbar>
                <center>
                  <button  className ="button" onClick={() => this.onNavigation ('/home')}>Home</button>
                  <button  className ="button" onClick={() => this.onNavigation ('/login')}>Login</button>
                  <button  className ="button" onClick={() => this.onNavigation ('/sign')}>Sign</button>
                  <button className ="button" onClick={() => this.onNavigation ('/list')}>List</button>
                  <button  className ="button" onClick={() => this.onNavigation ('/products')}>Products</button>
                  <button  className ="button" onClick={() => this.onNavigation ('/customer')}>Customer</button>
                  {/* <button onClick={() => this.onNavigation ('/icons')}>Icons</button> */}
                  {/* <button onClick={() => this.onNavigation ('/slider')}>Slider</button> */}
                 
                </center>
              </navbar>
      </div>
    );
  }
}
export default withRouter(Header);







