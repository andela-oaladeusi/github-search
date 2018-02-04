import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.props.search.searchGitHub();
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnClick(e) {
    e.preventDefault();
    this.props.name.addName(this.state.name);
  } 

  render() {
    const response = this.props.search.getResult.state;
    console.log(this.props.search.getResult.result)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { this.props.name.getName }
        </p>
        <label> Name Name: </label>
        <input name="name" value={this.state.value} onChange={this.handleOnChange}/>
        <button onClick={this.handleOnClick}>Change Name</button>
        <br/>
        { response }
      </div>
    );
  }
}

export default inject('name', 'search')(observer(App));

