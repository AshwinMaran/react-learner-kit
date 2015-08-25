import React, { Component, PropTypes } from 'react';
import './app.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      tab: 1
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
        <Tabs tab={this.state.tab} handleTabClick={::this.handleTabClick} />
        <TabContent  tab={this.state.tab} />
      </div>
    );
  }
}

class Tabs {

  static propTypes = {
    tab: PropTypes.number.isRequired,
    handleTabClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="tabs">
        <div className="tab" onClick={() => { this.props.handleTabClick(1); }}>Red</div>
        <div className="tab" onClick={() => { this.props.handleTabClick(2); }}>Green</div>
        <div className="tab" onClick={() => { this.props.handleTabClick(3); }}>Blue</div>
      </div>
    );
  }
}

class TabContent {

  static propTypes = {
    tab: PropTypes.number.isRequired
  }

  hideTabContent(tab, className, selectedTab) {
    return tab !== selectedTab ? className + ' hide' : className;
  }

  render() {
    return (
      <div className="content">
        <div className={this.hideTabContent(1, 'red-lorem', this.props.tab)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={this.hideTabContent(2, 'green-lorem', this.props.tab)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={this.hideTabContent(3, 'blue-lorem', this.props.tab)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}


export default App;

React.render(<App />, document.getElementById('app'));
