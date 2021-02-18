import React, { Component } from 'react'

import './ItemControl.css'

class ItemControl extends Component {
     render() {
          return (
               <div className={"ItemControl"}>
                    <p className={"ItemControl__text"}>{this.props.name} Rs. {this.props.price}.00</p>

                    <button className={"btn btn-outline-success m-1 p-0 ItemControl__button"} onClick={this.props.moreExecutor} >MORE  + </button>
                    <button className={"btn btn-outline-danger m-1 p-0 ItemControl__button "} onClick={this.props.lessExecutor} >LESS  - </button>

                    <h6 className={"ItemControl__price-text"}> [<span className={"text-danger"}><strong>{this.props.count}</strong></span>] </h6>
               </div>
          )
     }
}

export default ItemControl