import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Kiet" age="33" />
        <Person name="Susu" age="10">My hobby: Racing</Person>
        <Person name="Bangbang" age="9" />
      </div>
    );
  }
}

export default App;
