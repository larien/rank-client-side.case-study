const initialState = {
    categories: [],
    gamesByCategory: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            }
        case 'GET_GAMES_BY_CATEGORY':
            return {
                ...state,
                gamesByCategory: action.gamesByCategory
            }
        default:
            return state
    }
}