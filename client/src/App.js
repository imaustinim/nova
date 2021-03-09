import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    fetch("/users")
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default App;
