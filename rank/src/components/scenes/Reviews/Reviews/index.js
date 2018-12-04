import React, { Component } from 'react'
import { getReviews } from '../../../../redux/actions/review'
import { connect } from 'react-redux'
import './style.css'

const mapStateToProps = state => {
    return ({
        reviews: state.reviews.reviews
    })
}

const mapDispatchToProps = {
  getReviews
}

export class Reviews extends Component {
   constructor(props) {
      super(props)

      this.props.getReviews()
   }

  render() {
      const reviews = this.props.reviews.reverse().map((review)=>
      <div className="card">
          <img src={review.cover_image} alt="Thumb" />
          <div className="data">
            <h3 className="title"><a href={`/reviews/${review.id}`}>{review.title}</a></h3>
            <div className="body">
                <p className="average-rating">Average Rating: { review.average_rating }</p>
            </div>
          </div>
        </div>
      )
    return (
    <div>
        <div className={reviews.length === 0 ? '' : 'hidden'}><p className="noreviews">There are no reviews here!</p>
        <p className="noreviews">Why don't you try to create a new one? Up there!</p></div>
      <div className="reviews">
          { reviews }
      </div>
    </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reviews);