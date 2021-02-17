import React, { Component } from 'react';
import ItemControls from './ItemsControls/ItemControls';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './Panel.css'
import { updateItem } from '../../../Redux/index'

class Panel extends Component {
  render() {
       console.log(this.props)
     return (

               <div className={"Panel mt-4"}>
                    <h5 className={"Panel__title"}>{this.props.title}</h5>
                    <h6 className={"Panel__title text-danger"}>Extra</h6>
                    <hr />
{/* **************add item control here ************ */}
                    <ItemControls />
{/* **************add item control here ************ */}
                    <h5 className={"Panel__price m-3 "}>Total :  <span className={"text-dark"}>{this.props.price}.00</span> </h5>
                    <div className={"Panel__btnGroup"}>
                        
                         <Link to="/">
                               <button className={"btn btn-danger"}> CANCEL </button>
                         </Link>

                         <Link to="/transactions">
                              <button className={"btn btn-success m-3"}>PURCHASE </button>
                         </Link>
                        
                    </div>
               </div>
     );
  }
}


// ===================================

const mapStateToProps = (state) => {
     return {
          id : state.itemObject.id,
          price : state.itemObject.price,
          title : state.itemObject.title
     }
}

const mapDetachToProps = (dispatch) => {
     return {
          updateItemHandler : (obj) => dispatch( updateItem(
               {
                    id : obj.id,
                    price : obj.price,
                    title : obj.title
               }
          ) )
     }
}



export default connect(mapStateToProps, mapDetachToProps)(Panel)