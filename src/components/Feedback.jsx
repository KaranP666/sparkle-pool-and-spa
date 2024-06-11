import React from 'react'
import CustomerReview from './CustomerReview'
import { reviews } from '../constants'


const Feedback = () => {
  return (
    <section className="max-container">
    <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Customers </span>
      Say?
    </h3>
    <p className='info-text m-auto mt-4 max-w-lg text-center'>
      Here genuine stories from our satisfied customers about their experience with us
    </p>
    <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review)=>(
        <CustomerReview key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
      ))}

    </div>
</section>
  )
}

export default Feedback