const initialState = {
    reviews: [],
    review: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_REVIEWS':
            return {
                ...state,
                reviews: action.reviews
            }
        case 'GET_REVIEW':
            return {
                ...state,
                review: action.review
            }
        default:
            return state
    }
}