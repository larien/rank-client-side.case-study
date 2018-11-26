const initialState = {
    reviews: [],
    review: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_REVIEWS':
            return {
                ...state,
                reviews: action.reviews
            }
        case 'VIEW_REVIEW':
            return {
                ...state,
                review: action.review
            }
        default:
            return state
    }
}