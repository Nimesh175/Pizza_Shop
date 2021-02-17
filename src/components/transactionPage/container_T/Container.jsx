import React, { Component } from 'react'
import './Container.css'
import List from './List/List'

class Container extends Component {




     render() {
          return (
               <div className={"Container_T"}>
     {/* ************* Add list here ************* */}
               <List />
               <List />
               <List />
     {/* ************* Add list here ************* */}
               </div>
          )
     }
}

export default Container
