import React from 'react';
import './app.scss';

export default class App {
  render() {
    return (
      <div>
        <Tabs />
        <TabContent />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
