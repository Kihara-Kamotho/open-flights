import React from 'react'

const ReviewForm = (props) => {
  return( 
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Have an experience with {props.attributes.title}?Share your review!</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review title" />
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review description" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">
              rate this airline
            </div>
            [star rating goes here]
          </div>
        </div>
        <button type="submit">submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm 