import {combineReducers} from 'redux'

import panelReducer from './panel/panelReducer'
import counterReducer from './panel__counter/counterReducer'
import transactionReducer from './transaction/transactionReducer'

const rootReducers = combineReducers({
     itemObject : panelReducer ,
     counter : counterReducer ,
     transaction : transactionReducer
})

export default rootReducers