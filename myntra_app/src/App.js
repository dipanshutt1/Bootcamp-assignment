import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'
import CarouselBanner from './Component/Carousel/Index';
import Hotdeals from "./Component/HotDeals";
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CarouselBanner/>
        <Hotdeals/>
      </div>
    );
  }
}

export default App;
