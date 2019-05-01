import React, { Component } from 'react';
import LandingPageBackground from './images/landingpage/landingpage.jpg'
class LandingPage extends Component {

  render() {
   return <div className="container landingPagePicWidth">
   <img src={LandingPageBackground} className="img-fluid mt-5 pt-5" alt="langingpage"></img>
    <div className="row justify-content-center border border-primary">
      <div className="col">
        1 of 3
      </div>
      <div className="col-6">
        2 of 3 (wider)
      </div>
      <div className="col">
        3 of 3
      </div>
    </div>
   </div>
  }
}

export default LandingPage;