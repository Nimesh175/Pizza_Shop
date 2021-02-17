import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'
import store from '../../../../Redux/store'
import { UPDATE_ITEM } from '../../../../Redux/panel/actionType'


const Card = (props) => {
          return(
               <div className="cardSize card">
                    <img src={props.image} className="card-img-top mt-2" alt="..." />
                    <div className=" card-body">
                         <h5 className="card-title">{props.title}</h5>
                         <p className="card-text">Rs. {props.price}.00</p>
                        
                         <Link to="/purchase">
                              <button 
                                   onClick={()=> { store.dispatch({
                                        type:UPDATE_ITEM ,
                                        payload : props
                                   })}}
                                   className={"btn btn-warning myButton"} >ADD</button>
                         </Link>
                    </div>
               </div> 
          )
}


// ===================================


export default Card

// onClick={(props)=> {  store.getState().itemObject. updateItemHandler(props) } }