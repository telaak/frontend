import React, { Component } from 'react';
import Store from './Store'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import Admin from './Admin'
import LandingPage from './LandingPage'
import Login from './Login'
import smallLogo from './images/navbar/bluestat.png'

// Add Navigation here
const Navi = () => {
  return <nav id="Nav" className="navbar navbar-default fixed-top navbar-color">
            <div className="d-flex mx-auto nav-width">
            <NavLink className="nav-item nav-link" to="/LandingPage"><img src={smallLogo} width="30" height="20" alt="logo"></img></NavLink>
            <NavLink className="nav-item nav-link" to="/LandingPage">Mycelit</NavLink>
            <NavLink className="nav-item nav-link" to="/Store">Store</NavLink>
            <NavLink className="nav-item nav-link mr-auto" to="/Admin">Admin</NavLink>
            <NavLink className="nav-item nav-link" to="/Login">Login</NavLink>
            </div>
        </nav>
}


class App extends Component {
  render() {
      return <div className="w-100 background">
      
                <BrowserRouter>
                  <div>
                    <Navi/>          
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/Store" component={Store} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route exact path="/LandingPage" component={LandingPage} />
                    <Route exact path="/Login" component={Login} />
                  </div>
                </BrowserRouter>
              </div>
  }
}

export default App