import React, { Component } from 'react'

import './ItemControl.css'

class ItemControl extends Component {
     render() {
          return (
               <div className={"ItemControl"}>
                    <p className={"ItemControl__text"}>{this.props.name} Rs. {this.props.price}.00</p>

                    <button className={"btn btn-outline-success m-2 p-1"}>MORE  + </button>
                    <button className={"btn btn-outline-danger m-2 p-1"}>LESS  - </button>

                    <h6 className={"ItemControl__price-text"}> ^ 0 </h6>
               </div>
          )
     }
}

export default ItemControl