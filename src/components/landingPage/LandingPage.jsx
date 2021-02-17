import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import Container from './container/Container'
import store from '../../Redux/store'
import axios from '../../axios-instance'

import './LandingPage.css'

export default class LandingPage extends Component {
     
     constructor(props) {
          super(props)
          this.state = {
               itemList : []
          }
     }

     componentDidMount(){
          axios.get('/transaction.json')
          .then( response => {
               let objArray = [];
               for(let key in response.data){
                    objArray.unshift(
                         {
                              ...response.data[key],
                              id:key
                         }
                    )
               }
              this.setState({itemList : objArray})
           })
          .catch( error => alert('componentDidMount() [ERROR:01]'));
     }
         
     

     render() {
          return (
               <div className={"LandinPage"}>
                    <h3 className={"LandinPage__title"}>Pizza Category</h3>

                    <Link to="/transactions">
                         <button 
                              className={"btn btn-outline-warning TransactionPage__home"}> 
                                   <i className="fas fa-cart-arrow-down"></i> <span className={"text-danger"}>{this.state.itemList.length}</span>
                         </button>
                    </Link>

                    <hr />
                    <Container />
               </div>
          )
     }
}

