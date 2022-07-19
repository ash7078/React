import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Customer extends Component {
  render() {
    return (
      <div>
        <center>
          <hr />
          <h5> All The enquiries please CALL</h5>
          <em> 0414000111</em>
        </center>
        <Carousel>
          <img
            src="https://www.kmslh.com/wp-content/uploads/2017/10/Benefits-of-Knowledge-Base-for-Call-Centers.jpg"
            alt="cusomer susport"
          />
        </Carousel>
        <p>
          Technology changes, but human nature is perpetual — and there are few
          things in lif e and in business that we enjoy more than seeing one
          person helping another. Truly remarkable customer service goes beyond
          fixing bug or handing out discounts. It’s about leaving people with a
          positive memory of your business. When a flight attendant goes above
          and beyond for a frightened passenger, or a fry cook helps an elderly
          man to his car in a rainstorm, you’re witnessing something more than
          “good” customer service—the customer getting what they asked for.
          You’re witnessing someone going out of their way to make a customer’s
          day, week, or month, and that’s an important part of customer service
          that shouldn’t be forgotten.Read on for thirteen stories of star
          service reps who went the extra mile for their customers.
        </p>
      </div>
    );
  }
}
export default Customer;
