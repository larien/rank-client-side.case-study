import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8080/api/v1/"

export function loadReviews(){
    return(dispatch) => {
        axios.get(`${url}reviews`)
        .then((res)=> {
            let reviews = res.data
            dispatch({type: 'LOAD_REVIEWS', reviews})
        }).catch((err) => console.log(err))
    }
}

export function getReview(review_id) {
    return(dispatch) => {
        axios.get(`${url}reviews/${review_id}`)
        .then((res) => {
            let review = res.data
            dispatch({ type: 'VIEW_REVIEW', review})
        }).catch((err => console.log(err)))
    }
}