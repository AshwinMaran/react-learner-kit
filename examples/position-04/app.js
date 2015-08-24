import React, { Component, PropTypes } from 'react';
import './app.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      posX: 0,
      posY: 0
    };
  }

  handleClick(e) {
    e.preventDefault();
    // 50 because box size is 100px, so box gets centered w.r.t mouse position
    this.setState({
      posX: e.clientX - 50,
      posY: e.clientY - 50
    });
  }

  render() {
    return (
      <div className="app" onClick={::this.handleClick}>
        <BoxNaive posX={this.state.posX} posY={this.state.posY} />
      </div>
    );
  }
}

class BoxNaive {

  static propTypes = {
    posX: PropTypes.number.isRequired,
    posY: PropTypes.number.isRequired
  }

  render() {
    const { posX, posY } = this.props;

    const style = {
      transform: `translate3d(${posX}px, ${posY}px, 0)`,
      transition: `transform 0.5s`
    };

    return (
      <div className="box" style={style} />
    );
  }
}

export default App;

React.render(<App />, document.getElementById('app'));
