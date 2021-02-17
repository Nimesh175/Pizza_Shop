import { 
     COUNT_MORE_CHEESE,
     COUNT_MORE_CHICKEN,
     COUNT_MORE_ONIONS,
     COUNT_LESS_CHEESE,
     COUNT_LESS_CHICKEN,
     COUNT_LESS_ONIONS
               } from './actionType';


const initialState = {
    countCheese : 0 ,
    countChicken : 0,
    countOnions : 0
}

const counterReducer = (state=initialState , action) => {
     switch (action.type) {
          case  COUNT_MORE_CHEESE :
               return {
                    ...state ,
                    countCheese : state.countCheese + 1
               }

          case  COUNT_MORE_CHICKEN :
               return {
                    ...state ,
                    countChicken : state.countChicken + 1
               } 
               
          case  COUNT_MORE_ONIONS :
               return {
                    ...state ,
                    countOnions : state.countOnions + 1
               } 

          case  COUNT_LESS_CHEESE :
               return {
                    ...state ,
                    countCheese : ( state.countCheese !== 0 ) ? state.countCheese - 1 : 0
               }

          case  COUNT_LESS_CHICKEN :
               return {
                    ...state ,
                    countChicken : ( state.countChicken !== 0 ) ? state.countChicken - 1 : 0
               }

          case  COUNT_LESS_ONIONS :
               return {
                    ...state ,
                    countOnions : ( state.countOnions !== 0 ) ? state.countOnions - 1 : 0
               }     
     
          default:
               return state
     }
}

export default counterReducer