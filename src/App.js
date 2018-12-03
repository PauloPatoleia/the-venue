import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header'
import Freatured from './components/featured'
import VenueInfo from './components/VenueInfo'
import Highlights from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>

       <Element name="event">     
          <Freatured/>
       </Element>

       <Element name="info">
          <VenueInfo></VenueInfo>
       </Element>

      <Element name="hightlights">
           <Highlights></Highlights>
       </Element>

      <Element name="price">
          <Pricing></Pricing>
      </Element>

      <Element name="location">
          <Location></Location>
      </Element>

       <Footer></Footer>
      </div>
      
    );
  }
}

export default App;
