const initialState = {
    games: [],
    game: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                games: action.games
            }
        case 'GET_GAME':
            return {
                ...state,
                game: action.game
            }
        default:
            return state
    }
}