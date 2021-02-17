import { UPDATE_ITEM } from './actionType'


const initialState = {
     lastUpdateItem : {
          id : '',
          price : 0,
          title : ''
     }
}

const panelReducer = (state=initialState , action) => {
     switch (action.type) {
          case UPDATE_ITEM :
               return {
                    id : action.payload.id,
                    price : action.payload.price,
                    title : action.payload.title
               }
     
          default:
               return state
     }
}

export default panelReducer