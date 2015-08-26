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

  handleOptionClick(e, optionNum) {
    this.setState({
      selectedOption: this.state.selectedOption === optionNum ? 0 : optionNum
    });
  }


  render() {
    const subMenuList = this.state.selectedOption > 0 ?
      <SubMenuList selectedOption={this.state.selectedOption} /> : null;

    return (
      <div className="menu-list-wrapper">
        <div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 1); }}>Option 1</div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 2); }}>Option 2</div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 3); }}>Option 3</div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 4); }}>Option 4</div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 5); }}>Option 5</div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 6); }}>Option 6</div>
          <div className="menu-list" onClick={(e) => { this.handleOptionClick(e, 7); }}>Option 7</div>
        </div>
        {subMenuList}
      </div>
    );
  }
}

class SubMenuList {

  static propTypes = {
    selectedOption: PropTypes.number.isRequired
  }

  render() {
    const selectedOption = this.props.selectedOption;
    return (
      <div>
        <div className="sub-menu-list">Sub Option {selectedOption}.1</div>
        <div className="sub-menu-list">Sub Option {selectedOption}.2</div>
        <div className="sub-menu-list">Sub Option {selectedOption}.3</div>
        <div className="sub-menu-list">Sub Option {selectedOption}.4</div>
        <div className="sub-menu-list">Sub Option {selectedOption}.5</div>
        <div className="sub-menu-list">Sub Option {selectedOption}.6</div>
        <div className="sub-menu-list">Sub Option {selectedOption}.7</div>
      </div>
    );
  }
}


export default App;

React.render(<App />, document.getElementById('app'));
