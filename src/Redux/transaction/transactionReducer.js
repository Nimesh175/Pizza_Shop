import { SHOW_TRANSACTION } from "./actionType";

const initialState = {
    transactionList : []
}

const transactionReducer = (state=initialState , action) => {
     switch (action.type) {
          case SHOW_TRANSACTION :
               return state.transactionList.unshift(
                    
                    {
                         title : action.payload.title ,
                         date : action.payload.date ,
                         countCheese : action.payload.countCheese ,
                         countChicken : action.payload.countChicken ,
                         countOnions : action.payload.countOnions ,
                         total : action.payload.total
                    },
                    ...state 
               )
     
          default:
               return state
     }
}

export default transactionReducer