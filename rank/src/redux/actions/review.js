import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

export function getReviews(){
    return(dispatch) => {
        axios.get(`${url}reviews`)
        .then((res)=> {
            let reviews = res.data
            if (reviews !== null){
                dispatch({type: 'GET_REVIEWS', reviews})
            } else {
                dispatch({type: 'GET_REVIEWS', reviews: ["teste"]}) // TODO
            }
        }).catch((err) => console.log(err))
    }
}

export function getReview(review_id) {
    return(dispatch) => {
        axios.get(`${url}reviews/review/${review_id}`)
        .then((res) => {
            let review = res.data
            dispatch({ type: 'GET_REVIEW', review})
        }).catch((err) => console.log(err))
    }
}

export function getUnpublishedReviews(){
    return(dispatch) => {
        axios.get(`${url}reviews/unpublished`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=> {
            let reviews = res.data
            if (reviews !== null){
                dispatch({type: 'GET_UNPUBLISHED_REVIEWS', reviews})
            } else {
                dispatch({type: 'GET_UNPUBLISHED_REVIEWS', reviews: ["teste"]}) // TODO
            }
            
        }).catch((err) => console.log(err))
    }
}