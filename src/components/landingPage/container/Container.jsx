import React, { Component } from 'react';
import Card from './cards/Card'

import axios from '../../../axios-instance'

import P__01 from '../../../assests/P__01.PNG'
import P__02 from '../../../assests/P__02.PNG'

import './Container.css'

class Container extends Component {
     constructor(props) {
          super(props)
          this.state = {
               itemList : []
          }
     }


     
  componentDidMount(){
     axios.get('/items.json')
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
               <div className={"CardContainer"}>

               {    
                    this.state.itemList.length !== 0 &&
                         this.state.itemList.map(item => {
                              return  <Card key={item.id} image={P__01} title={item.title} price={item.price} />
                         })
               }
                  
               </div>
          )
     }
}     

export default Container