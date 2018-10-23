import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Kiet', age: 33 },
      { name: 'Susu', age: 10 },
      { name: 'Bangbang', age: 9 },
    ],
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 33 },
        { name: 'Susu Nguyen', age: 10 },
        { name: 'Bangbang', age: 9 },
      ]
    } );
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Kiet', age: 33 },
        { name: event.target.value, age: 10 },
        { name: 'Bangbang', age: 9 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'KietN')}>
          Switch name
        </button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'SusuN')}
          changed={this.nameChangeHandler}
        >
          My hobby: Racing
        </Person>

        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
