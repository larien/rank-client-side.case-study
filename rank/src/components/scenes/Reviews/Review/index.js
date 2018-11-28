import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReview } from '../../../../redux/actions/actions';

const mapStateToProps = state => {
    return {
        _review: state.reviews.review
    }
}

class Review extends Component {

    componentDidMount() {
        document.body.className = 'Show Reviews'
    }

    componentWillMount(){
        this.props.getReview(this.props.match.params.id)
    }

    componentWillUnmount(){
        document.body.className = ''
    }

    render() {
        const { title, cover_image, author_nickname, average_rating, publication_date, reading_time, text_review } = this.props._review

        return (
        <div className="review">
            <div className="thumbnail">
            <h3 className="info">{title}</h3>
            <img src={cover_image} alt="Thumb" />
            </div>
            <div>
                <p>Author: {author_nickname}</p>
                <p>Average Rating: {average_rating}</p>
                <p>Publication Date: {publication_date}</p>
                <p>Reading Time: {reading_time}</p>
            </div>
            <div className="text">
                <p>Review: {text_review}</p>
            </div>
        </div>
        )
    }
}
export default connect(mapStateToProps, {
    getReview
})(Review);