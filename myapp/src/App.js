import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Aside from './component/Aside';
import Footer from './component/Footer';
class App extends Component {
  constructor(){
    super();
    this.state={
      counter:0,
      name:'arjun'
    }
  }
  onIncrease = (value) => {
    this.setState({
      counter: this.state.counter+1,
      name: value
    })
  }

  

  render() {
    return (
      <div className = 'App'>
      <Header count={this.state.counter}/>
      <Main func = {this.onIncrease}/>
      <Aside/>
      <Footer fn = {this.onIncrease}/>
      </div>
    );
  }
}

export default App;
