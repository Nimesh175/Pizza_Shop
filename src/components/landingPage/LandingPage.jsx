import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import Container from './container/Container'


import './LandingPage.css'

export default class LandingPage extends Component {

     render() {
          return (
               <div className={"LandinPage"}>
                    <h3 className={"LandinPage__title"}>Pizza Category</h3>

                    <Link to="/transactions">
                         <button className={"btn btn-outline-warning TransactionPage__home"}> <i className="fas fa-cart-arrow-down"></i> <span className={"text-danger"}>99</span></button>
                    </Link>

                    <hr />
                    <Container />
               </div>
          )
     }
}

