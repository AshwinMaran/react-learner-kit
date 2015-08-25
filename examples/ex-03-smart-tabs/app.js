import React, { Component, PropTypes } from 'react';
import './app.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      tab: 0
    };
  }

  handleTabClick(tab) {
    this.setState({
      tab: tab
    });
  }

  render() {
    return (
      <div>
        <TabNames tab={this.state.tab} handleTabClick={::this.handleTabClick}>
          <div>Red</div>
          <div>Green</div>
          <div>Blue</div>
        </TabNames>
        <TabContents tab={this.state.tab}>
          <div className="red-lorem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="green-lorem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="blue-lorem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </TabContents>
      </div>
    );
  }
}

class TabNames {

  static propTypes = {
    tab: PropTypes.number.isRequired,
    handleTabClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
  }

  render() {
    const tabs = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        className: 'tab',
        onClick: () => { this.props.handleTabClick(i); }
      });
    });

    return (
      <div className="tabs">
        {tabs}
      </div>
    );
  }
}

class TabContents {

  static propTypes = {
    tab: PropTypes.number.isRequired,
    children: PropTypes.array.isRequired
  }

  render() {
    const tabContents = this.props.children.filter((_, i) => (this.props.tab === i));
    return (
      <div className="content">
        {tabContents}
      </div>
    );
  }
}

export default App;

React.render(<App />, document.getElementById('app'));
