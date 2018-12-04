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

   approveReview =  async (review_id, e) => {
    const _url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

    console.log(await review_id)

    const response = await fetch(`${_url}reviews`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      },
      body: JSON.stringify({
          id: review_id,
          is_published: true,
        }),
    });
    const body = await response.text();
    console.log(body);
    window.location.reload();
   };

  render() {
      const reviews = this.props.reviews.reverse().map((review)=>
          <div className="data">
            <h3 className="title"><a href={`/reviews/${review.id}`}>{review.title}</a> - <button onClick={(e) => this.approveReview(review.id, e)}>APPROVE</button></h3>
          </div>
      )
    return (
    <div>
        <div className={reviews.length === 1 ? '' : 'hidden'}>
          <p className="noreviews">There are no reviews to be approved here!</p>
        </div>
      <div className="reviews">
        <div className={reviews.length === 1 ? 'hidden' : ''}>
          { reviews }
        </div>
      </div>
    </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Unpublished);