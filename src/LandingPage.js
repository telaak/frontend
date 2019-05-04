import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './animations/Hud.json';
import { withRouter, Link } from 'react-router-dom';

class LandingPage extends Component {
  componentWillUnmount() {
    console.log('animation component unmounted');
  }

  render() {
    const animationWrapper = {
      width: '700px'
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <div className="p-2 d-flex row justify-content-center">
          <Link to="/Store">
            <div style={animationWrapper} className="animationPic">
              <Lottie options={defaultOptions} />
            </div>
          </Link>
        </div>
        <button>stop</button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
