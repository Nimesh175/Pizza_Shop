import { 
     COUNT_MORE_CHEESE,
     COUNT_MORE_CHICKEN,
     COUNT_MORE_ONIONS,
     COUNT_LESS_CHEESE,
     COUNT_LESS_CHICKEN,
     COUNT_LESS_ONIONS,
     COUNT_RESET
               } from './actionType';


export  const countMoreCheese = () => {
     return {
          type : COUNT_MORE_CHEESE
     }
}

export  const countMoreChicken = () => {
     return {
          type : COUNT_MORE_CHICKEN
     }
}

export  const countMoreOnions = () => {
     return {
          type : COUNT_MORE_ONIONS
     }
}

export  const countLessCheese = () => {
     return {
          type : COUNT_LESS_CHEESE
     }
}

export  const countLessChicken = () => {
     return {
          type : COUNT_LESS_CHICKEN
     }
}

export  const countLessOnions = () => {
     return {
          type : COUNT_LESS_ONIONS
     }
}

export  const countReset = () => {
     return {
          type : COUNT_RESET
     }
}