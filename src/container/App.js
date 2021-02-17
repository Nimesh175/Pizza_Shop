import React, { Component } from 'react'
import PurchasePage from '../components/purchusePage/PurchusePage';
import TransactionPage from '../components/transactionPage/TransactionPage';
import LandingPage from '../components/landingPage/LandingPage';

import './App.css';

import { BrowserRouter , Switch , Route} from 'react-router-dom'
import {Provider } from 'react-redux'
import store from '../Redux/store'


class App extends Component {

  render() {
      return (
      <Provider store={store}>
            <BrowserRouter>
              <div className={"App"}>
              
                <Switch>
                    <Route  path="/"  exact component={LandingPage} />
                    <Route  path="/purchase"   component={PurchasePage} />
                    <Route  path="/transactions"   component={TransactionPage} />
                </Switch>

            </div>
          </BrowserRouter>
      </Provider>
      )
  }

}

export default App
