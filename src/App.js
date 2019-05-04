import React, { Component } from 'react';
import Store from './Store'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import Admin from './Admin'
import LandingPage from './LandingPage.js'
import smallLogo from './images/navbar/bluestat.png'

// Add Navigation here
const Navi = () => {
  
  return <nav id="Nav" className="navbar navbar-default fixed-top navbar-color">
            <div className="d-flex mx-auto nav-width">
              <NavLink className="nav-item nav-link" to="/LandingPage"><img src={smallLogo} width="30" height="20" alt="logo"></img></NavLink>
              <NavLink className="nav-item nav-link" to="/LandingPage">Mycelit</NavLink>
              <NavLink id="showStoreNav" className="nav-item nav-link shownWhenLoggedIn" to="/Store">Store</NavLink>
              <NavLink id="showAdminNav" className="nav-item nav-link shownWhenLoggedIn" to="/Admin">Admin</NavLink>
              <div className="mr-auto"></div>
              <div id="signedInWrapper">
                  <div id="customBtn">
                    <span className="icon"></span>
                    <span className="buttonText">Sign in with Google</span>
                  </div>
              </div>
              <div id="navBarUserName" className="welcomeText"></div>
              <div id="logoutWrapper">
                <NavLink id="logoutButton" className="logout-style" to="/LandingPage" onClick={signOut}>
                  <span className="logout-icon"></span>
                  <span className="logout-text">Logout</span>
                </NavLink>
                </div>
            </div>
        </nav>
}

const signOut = () => {
  var auth2 = window.gapi.auth2.getAuthInstance()
  auth2.signOut().then(function () {
    console.log('User signed out.')
    document.getElementById('logoutButton').style.display = 'none'
    document.getElementById('signedInWrapper').style.display = 'inline-block'
    document.getElementById('showStoreNav').style.display = 'none'
    document.getElementById('showAdminNav').style.display = 'none'
    document.getElementById('navBarUserName').innerText = ""
  })
}

class App extends Component {

  componentDidMount() {

    var startApp = function() {
      window.gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        window.auth2 = window.gapi.auth2.init({
          client_id: '173174574853-jg0frpr5qbc0qddb056v7b6ob0143fhi.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          // Request scopes in addition to 'profile' and 'email'
          //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('customBtn'))
      })
    }

    function attachSignin (element) {
      window.auth2.attachClickHandler (element, {},
        function (googleUser) {
          document.getElementById('logoutButton').style.display = 'inline-block'
          document.getElementById('signedInWrapper').style.display = 'none'
          document.getElementById('showStoreNav').style.display = 'inline-block'
          document.getElementById('showAdminNav').style.display = 'inline-block'
          document.getElementById('navBarUserName').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName()
        }, function (error) {
          alert (JSON.stringify(error, undefined, 2))
        })
    }
    startApp()
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile()
    console.log("Name: " + profile.getName())
  }
  
  render() {
      return <div className="w-100 background">
                <BrowserRouter>
                  <div>
                    <Navi/>          
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/Store" component={Store} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route exact path="/LandingPage" component={LandingPage} />
                  </div>
                </BrowserRouter>
              </div>
  }
}

export default App