import { combineReducers } from 'redux'
import reviews from './reducers/reviews'
import games from './reducers/games'
import common from './reducers/common'
import categories from './reducers/categories'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    reviews,
    games,
    categories,
    common,
    router: routerReducer
})