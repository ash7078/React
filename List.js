import React, { Component } from 'react';
import axios from 'axios';
//import jsonData  from './db.json';
 class List extends Component {
  
///// here i'm using the constuctor method because to store the local data ///
       
    constructor(){
        super();
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        /// here i'm making the API calls ///
        axios.get(`http://localhost:6000/list`).then(response => {
            console.log(response);
            this.setState({
               list: response.data
           });
        }).catch(err => {
            console.error(err);
        });
    }
    render() {
        const {list} = this.state;
        return (
            <center>
            <div>
                <h1> Shopping List</h1>
                {
                    list.map((item,index) => {
                        return (
                            <div key={index}>
                              <img src={item.image} alt="logo" />
                            </div>
                        )
                    })
                }
            </div>
            </center>
        )
    }
}
export default List;




// import React, { useEffect, useState } from "react";
// const imageUrl = "../../db.json";
// export default function App() {
//   const [img, setImg] = useState();

//   const fetchImage = async () => {
//     const res = await fetch(imageUrl);
//     const imageBlob = await res.blob();
//     const imageObjectURL = URL.createObjectURL(imageBlob);
//     setImg(imageObjectURL);
//   };

//   useEffect(() => {
//     fetchImage();
//   }, []);

//   return (
//     <>
//       <img src={img} alt="icons" />
//     </>
//   );
// }