import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'



class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background: "cornflowerblue"}}>
       <Header/>
      </div>
    );
  }
}

export default App;
