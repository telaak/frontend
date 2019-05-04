import React, { Component } from 'react';
import lottie from '../node_modules/lottie-web/build/player/lottie';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: {}
    };
  }

  componentDidMount() {
    this.setState({
      animation: lottie.loadAnimation({
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'hud.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      })
    })
  }

  componentWillUnmount() {
    this.state.animation.destroy()
    console.log('animation component unmounted');
  }

  render() {
    const animationWrapper = {
      width: '700px'
    };

    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <div className="p-2 d-flex row justify-content-center">
          <Link to="/Store">
            <div
              id="lottie"
              style={animationWrapper}
              className="animationPic"
            />
          </Link>
        </div>
        <button>stop</button>
      </div>
    );
  }
}

export default LandingPage;
