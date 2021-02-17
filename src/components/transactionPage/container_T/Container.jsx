import React, { Component } from 'react'
import './Container.css'
import List from './List/List'
import { connect } from 'react-redux'
import store from '../../../Redux/store'
import axios from '../../../axios-instance'


class Container extends Component {

     constructor(props) {
          super(props)
          this.state = {
               itemList : []
          }
          this.commonFunction = this.commonFunction.bind(this)
     }


     commonFunction = () => {
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

     componentDidMount() {
          this.commonFunction()
     }
     componentDidUpdate() {
          this.commonFunction()
     }

     


     render() {

          return (
               <div className={"Container_T"}>
     {/* ************* Add list here ************* */}

               {
                    this.state.itemList.length !==0 ?
                    this.state.itemList.map(
                         (data , index) => {
                              return <List key={this.state.itemList[index].id}
                                   id={this.state.itemList[index].id} 
                                   title={this.state.itemList[index].title} 
                                   date={this.state.itemList[index].date} 
                                   countCheese={this.state.itemList[index].countCheese} 
                                   countChicken={this.state.itemList[index].countChicken} 
                                   countOnions={this.state.itemList[index].countOnions} 
                                   total={this.state.itemList[index].total} />      
                         }
                    ): null
               }

     {/* ************* Add list here ************* */}
               </div>
          )
     }
}


export default Container
