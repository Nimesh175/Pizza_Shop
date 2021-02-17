import { SHOW_TRANSACTION } from "./actionType";

export  const showTransaction = (payload) => {
     return {
          type : SHOW_TRANSACTION,
          payload : payload
     }
}