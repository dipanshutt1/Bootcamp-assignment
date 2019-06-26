import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state={
    userList:[]
  }

  render() {
    axios.get('http://127.0.0.1:3000/user')
          .then(function(response){
            this.setState({
              userList:response
          })
          })
          .error(function(error){
            console.log(error)
          })
    return (
      <div>
        <h1>{this.userList}</h1>
        <p>hello</p>
      </div>
    );
  }
}

export default App;
