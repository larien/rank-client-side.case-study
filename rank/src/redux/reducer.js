import { combineReducers } from 'redux'
import reviews from './reducers/reviews'
import common from './reducers/common'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    reviews,
    common,
    router: routerReducer
})