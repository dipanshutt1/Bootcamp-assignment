import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemComponent from './Component/AddItemComponent';
import Cart from './Component/Cart'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Cart</h1>
        <Cart/>
      </div>
    );
  }
}

export default App;
