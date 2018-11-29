import { combineReducers } from 'redux'
import reviews from './reducers/reviews'
import games from './reducers/games'
import common from './reducers/common'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    reviews,
    games,
    common,
    router: routerReducer
})