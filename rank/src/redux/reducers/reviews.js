const initialState = {
    reviews: [],
    review: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_REVIEWS':
            return {}
        case 'VIEW_REVIEW':
            return {}
        default:
            return state
    }
}