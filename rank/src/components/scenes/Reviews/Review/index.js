import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReview } from '../../../../redux/actions/review';
import './Review.css';

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
        const { title, cover_image, author_nickname, average_rating, updated_at, reading_time, text_review } = this.props._review
        return (
            <div className="review">
                <div className="reviewthumbnail">
                    <h3 className="info">{title}</h3>
                    <img src={cover_image} alt="Thumb" />
                </div>
                <div className="reviewinfo">
                    <p>Author: {author_nickname}</p>
                    <p>Publication Date: {updated_at}</p>
                    <p>Reading Time: {reading_time}</p>
                    <p>Review: {text_review}</p>
                </div>
                <div className="reviewrate">
                    <p>Average Rating: {average_rating}</p>
                    <form>
                        <div className="field info-rating">
                                    <div>
                                        <h3 htmlFor="rating">Rating</h3> 
                                    </div>
                                    <div>
                                        <input type="number"/>
                                    </div>
                        </div>
                        <div className="submitbutton">
                                <button type="submit">RATE GAME</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            )
    }
}
export default connect(mapStateToProps, {
    getReview
})(Review);