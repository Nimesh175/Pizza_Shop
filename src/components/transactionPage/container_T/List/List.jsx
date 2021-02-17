import React, { Component } from 'react'

import './List.css'

class List extends Component {
     render() {
          return (
               <div className={"List"}>
                    <div className={"List__container"}>
                         <p className={"List__container_P text-danger"}>Chicken Pizza [Large]  </p>
                         <p className={"List__container_P text-secondary"}> [2021 May 21 20:00:00 GMT]</p>

                         <p className={"List__container_P"}>[Extra] Cheese : 2</p>
                         <p className={"List__container_P"}>[Extra] Chicken : 5</p>
                         <p className={"List__container_P"}>[Extra] Onions : 1</p>

                         <p className={"List__container_P"}>[Total Price] : Rs.<span className={"text-danger "}> <strong> 678.00 </strong></span></p>

                         <button className={"btn btn-danger List__container_button"}>DELETE</button>
                    </div>
               </div>
          )
     }
}

export default List
