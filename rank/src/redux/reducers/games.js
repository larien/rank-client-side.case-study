const initialState = {
    games: [],
    game: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_GAMES':
            return {
                ...state,
                games: action.games
            }
        case 'VIEW_GAME':
            return {
                ...state,
                game: action.game
            }
        default:
            return state
    }
}