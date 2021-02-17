import React, { Component } from 'react'

import './List.css'
import axios from '../../../../axios-instance'

class List extends Component {

     constructor(props) {
          super(props)
         
          this.deleteButtonFunction = this.deleteButtonFunction.bind(this)
     }


     deleteButtonFunction = () => {
          console.log(this.props)

          axios.delete("/transaction/"+ this.props.id)
          .then(  res => alert('[Deleted Successfully !!]') )
          .catch( error => alert('componentDidMount() [ERROR:01]'));
     }


     render() {
          return (
               <div className={"List"}>
                    <div className={"List__container"}>
                         <p className={"List__container_P text-danger"}>{this.props.title} </p>
                         <p className={"List__container_P text-secondary"}>[Date] {this.props.date}</p>

                         <p className={"List__container_P"}>[Extra] Cheese : {this.props.countCheese} </p>
                         <p className={"List__container_P"}>[Extra] Chicken : {this.props.countChicken} </p>
                         <p className={"List__container_P"}>[Extra] Onions : {this.props.countOnions}</p>

                         <p className={"List__container_P"}>[Total Price] : Rs.<span className={"text-danger "}> <strong> {this.props.total}.00 </strong></span></p>

                         <button onClick={this.deleteButtonFunction} className={"btn btn-danger List__container_button"}>DELETE</button>
                    </div>
               </div>
          )
     }
}

export default List
