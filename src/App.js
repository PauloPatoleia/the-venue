import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header'
import Freatured from './components/featured'
import VenueInfo from './components/VenueInfo'



class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background: "cornflowerblue"}}>
       <Header/>
       <Freatured/>
       <VenueInfo>  </VenueInfo>
      </div>
    );
  }
}

export default App;
