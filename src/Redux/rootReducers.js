import {combineReducers} from 'redux'

import panelReducer from './panel/panelReducer'
import counterReducer from './panel__counter/counterReducer'

const rootReducers = combineReducers({
     itemObject : panelReducer ,
     counter : counterReducer
})

export default rootReducers