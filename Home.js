
import React, { Component } from 'react';
import{Carousel} from 'react-bootstrap'


 class Home extends Component { 
  render() {
    return (
      <div>
        <h1 style ={{ color : 'red' }}> Coles </h1>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height :500 , width :1440}}
          src="https://img.buzzfeed.com/buzzfeed-static/static/2022-06/7/17/asset/b521c75a97dc/sub-buzz-3039-1654623168-4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>We Belive Auisse Framers Grow Some Of The Best Fruits & Vegitables In The World</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height :500 , width :1440}}
          src="https://thumbs.dreamstime.com/b/woman-supermarket-buying-groceries-15561543.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fresh Vegitables</h3>
          <p>We Belive Auisse Framers Grow Some Of The Best Fruits & Vegitables In The World</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height :500 , width :1440}}
          src="https://www.sightmagazine.com.au/images/newsite-images/features/Fresh_produce.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          We Belive Auisse Framers Grow Some Of The Best Fruits & Vegitables In The World
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
export default Home;