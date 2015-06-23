import React, { Component } from 'react';
import './app.scss';

class Tabs {

  computeClassName(tab) {
    return tab === this.props.activeTab ? 'active' : '';
  }

  render() {
    const listItems = ([1, 2, 3]).map(tab =>
      <li key={tab}
          className={this.computeClassName(tab)}
          onClick={() => this.props.onTabClick(tab)}>
        Tab {tab}
      </li>
    );

    return (
      <ul className="tabs">
        {listItems}
      </ul>
    );
  }
}


class TabContent {

  render() {
    const imageSource = 'http://lorempixel.com/450/450/food';
    const style = {
      width: 450 / this.props.activeTab,
      height: 450 / this.props.activeTab
    };

    return (
      <img src={imageSource} style={style} />
    );
  }
}



export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: 1 };
  }

  handleTabClick(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onTabClick={::this.handleTabClick} />
        <TabContent activeTab={this.state.activeTab} />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
