import React, { Component } from 'react'
import ItemControl from './ItemControl/ItemControl'

import './ItemControls.css'


 class ItemControls extends Component {
     render() {
          return (
               <div className={"ItemControls"}>
                   <ItemControl name={"Cheese  |"} price={25} />
                   <ItemControl name={"Chicken  |"}  price={35} />
                   <ItemControl name={" Onions  |"} price={10}  />
               </div>
          )
     }
}

export default ItemControls