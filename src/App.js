import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header'
import Freatured from './components/featured'
import VenueInfo from './components/VenueInfo'
import Highlights from './components/Highlights'
import Pricing from './components/pricing'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Freatured/>
       <VenueInfo></VenueInfo>
       <Highlights></Highlights>
       <Pricing></Pricing>
      </div>
      
    );
  }
}

export default App;
