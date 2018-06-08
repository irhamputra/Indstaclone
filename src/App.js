import React, { Component } from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Posts/>
      </div>
    )
  }
}

export default App;