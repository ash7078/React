import React, { Component } from 'react';
import axios from 'axios';


 class Products extends Component {
     constructor() {
         super();

         this.state = {
             listOfTodos:[]
         };
     }

    componentDidMount() {
            //// here im making the API calls /////
            axios.get(` https://jsonplaceholder.typicode.com/todos`).then(resp=> {

                  this.setState({
                      listOfTodos: resp.data
                  });
            }).catch(err => {
                console.log(err);
            });
    }
    render() {
        const{listOfTodos} = this.state;
        return (
            <div>
              <center> <hr/>
                {
                     listOfTodos.map((item,index) =>{
                              return (
                                  <div key={index}>
                                       {item.title}
                                 </div>
                              )
                     })
                }
              </center> 
            </div>
        )
    }
}
export default Products;



