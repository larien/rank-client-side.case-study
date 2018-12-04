import React, { Component } from 'react'
import { getUnpublishedReviews } from '../../../../redux/actions/review'
import { connect } from 'react-redux'
// import './style.css'

const mapStateToProps = state => {
    return ({
        reviews: state.reviews.unpublished_reviews
    })
}

const mapDispatchToProps = {
  getUnpublishedReviews
}

export class Unpublished extends Component {
   constructor(props) {
      super(props)

      this.props.getUnpublishedReviews()
   }

  render() {
      const reviews = this.props.reviews.reverse().map((review)=>
          <div className="data">
            <h3 className="title"><a href={`/reviews/${review.id}`}>{review.title}</a> - <a href={`/reviews/${review.id}`}>APPROVE</a></h3>
          </div>
      )
    return (
    <div>
        <div className={reviews.length === 0 ? '' : 'hidden'}>
          <p className="noreviews">There are no reviews to be approved here!</p>
        </div>
      <div className="reviews">
        { reviews }
      </div>
    </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Unpublished);