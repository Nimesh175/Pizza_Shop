import React, { Component } from 'react'
import ItemControl from './ItemControl/ItemControl'
import { connect } from 'react-redux'

import './ItemControls.css'
import { 
     countMoreCheese,
     countMoreChicken,
     countMoreOnions,
     countLessCheese,
     countLessChicken,
     countLessOnions
           } from '../../../../Redux/index'

import {EXTRA_CHEESE_PRICE , EXTRA_CHICKEN_PRICE , EXTRA_ONIONS_PRICE} from './extraSingleItemPrice'

 class ItemControls extends Component {
     render() {
          return (
               <div className={"ItemControls"}>
                   <ItemControl name={"Cheese  |"} price={EXTRA_CHEESE_PRICE} count={this.props.countCheese} moreExecutor={this.props.moreCheeseHandler}  lessExecutor={this.props.lessCheeseHandler}  />
                   <ItemControl name={"Chicken  |"}  price={EXTRA_CHICKEN_PRICE} count={this.props.countChicken} moreExecutor={this.props.moreChickenHandler}  lessExecutor={this.props.lessChickenHandler}  />
                   <ItemControl name={" Onions  |"} price={EXTRA_ONIONS_PRICE}  count={this.props.countOnions}  moreExecutor={this.props.moreOnionsHandler}  lessExecutor={this.props.lessOnionseHandler} />
               </div>
          )
     }

 }

 // *************************

const mapStateToProps = (state) => {
     return {
          countCheese : state.counter.countCheese ,
          countChicken : state.counter.countChicken,
          countOnions : state.counter.countOnions
     }
}

const mapDetachToProps = (dispatch) => {
     return {
         moreCheeseHandler : () => dispatch(countMoreCheese())   ,  
         moreChickenHandler : () => dispatch(countMoreChicken()) ,   
         moreOnionsHandler : () => dispatch(countMoreOnions())   ,  
         lessCheeseHandler : () => dispatch(countLessCheese())   , 
         lessChickenHandler : () => dispatch(countLessChicken()) , 
         lessOnionseHandler : () => dispatch(countLessOnions())      

     }
}



export default connect(mapStateToProps, mapDetachToProps)(ItemControls)