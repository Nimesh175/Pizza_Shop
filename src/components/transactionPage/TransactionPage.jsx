import React, { Component } from 'react'
import Container from './container_T/Container'
import './TransactionPage.css'

import {Link } from 'react-router-dom'

 class TransactionPage extends Component {
     render() {
          return (
               <div className={"TransactionPage"}>
                    <h3 className={"TransactionPage__title"}> Transactions</h3>
                    
                    <Link to="/">
                         <button className={"btn btn-outline-warning TransactionPage__home"}> <i className="fas fa-home"></i> Home</button>
                    </Link>
                    
                    <hr />
               {/* ************* Add container_T here ************* */}

                    <Container />

               {/* ************* Add container_T here ************* */}


               </div>
          )
     }
}

export default TransactionPage