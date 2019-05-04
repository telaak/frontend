import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './animations/Hud.json'
import { withRouter } from "react-router-dom";

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.animationClick = this.animationClick.bind(this)
  }

  //Uses react-router v4 withRouter and history.push to navigate to the wanted location
  animationClick() {
    this.props.history.push("/Store")
  }
  componentWillUnmount() {
    console.log('animation component unmounted')
  }

  render() {

    const animationWrapper = {
      width: '700px'
    }

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    

   return <div className="d-flex flex-column justify-content-center mt-5 pt-5">
              <div className="p-2 d-flex row justify-content-center">
                <div style={animationWrapper} className="animationPic" onClick={this.animationClick}>
                  <Lottie options={defaultOptions}/>
                </div>
              </div>
              <button>stop</button>
          </div>
  }
}

export default withRouter(LandingPage);