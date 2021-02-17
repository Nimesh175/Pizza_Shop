import { UPDATE_ITEM } from './actionType'

export  const updateItem = (payload) => {
     return {
          type : UPDATE_ITEM,
          payload : payload
     }
}