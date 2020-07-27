import React from 'react';
import './ReviewContainer.css'
import data from '../../data';
import Reviews from '../Reviews/Reviews'

const ReviewContainer= () => {
  
  const iteratedRev = data.reviews.map((rev, i) => 
    <Reviews 
      key={i}
      rev={rev}
    />
  )

  return (
    <section className="ReviewContainer">
      <h1>Ratings & Reviews</h1>
      <div>
        <div className="review-div-star"></div>
        <h2>4.9</h2>
        <p>12 Reviews</p>
      </div>
      {iteratedRev}
    </section>
  )
};


export default ReviewContainer;