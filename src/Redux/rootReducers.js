import {combineReducers} from 'redux'

import cardReducer from './panel/panelReducer'

const rootReducers = combineReducers({
     itemObject : cardReducer
})

export default rootReducers