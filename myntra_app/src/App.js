import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'
import CarouselBanner from './Component/Carousel/Index';
import Hotdeals from "./Component/HotDeals";
import DiscountSection from "./Component/Discount/Index";
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CarouselBanner/>
        <Hotdeals/>
        <DiscountSection/>
      </div>
    );
  }
}

export default App;
