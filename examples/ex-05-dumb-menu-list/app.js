import React, { Component, PropTypes } from 'react';
import './app.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      clicked: false
    };
  }

  handleMenuClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    const menuList = this.state.clicked ? <MenuList /> : null;
    return (
      <div>
        <MenuButton handleMenuClick={::this.handleMenuClick} />
        {menuList}
      </div>
    );
  }
}

class MenuButton {

  static propTypes = {
    handleMenuClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="menu-button" onClick={() => { this.props.handleMenuClick(); }}>Menu</div>
    );
  }
}

class MenuList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: 0
    };
  }


  render() {
    const subMenuList = this.state.selectedOption > 0 ? <SubMenuList /> : null;

    return (
      <div>
        <div>
          <div className="menu-list">Option 1</div>
          <div className="menu-list">Option 2</div>
          <div className="menu-list">Option 3</div>
          <div className="menu-list">Option 4</div>
          <div className="menu-list">Option 5</div>
          <div className="menu-list">Option 6</div>
          <div className="menu-list">Option 7</div>
        </div>
        {subMenuList}
      </div>
    );
  }
}

class SubMenuList {

  render() {
    return (
      <div>
        <div className="sub-menu-list">Sub Option 1</div>
        <div className="sub-menu-list">Sub Option 2</div>
        <div className="sub-menu-list">Sub Option 3</div>
        <div className="sub-menu-list">Sub Option 4</div>
        <div className="sub-menu-list">Sub Option 5</div>
        <div className="sub-menu-list">Sub Option 6</div>
        <div className="sub-menu-list">Sub Option 7</div>
      </div>
    );
  }
}


export default App;

React.render(<App />, document.getElementById('app'));
