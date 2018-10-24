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
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Susu Nguyen', age: 10 },
        { name: 'Bangbang', age: 9 },
      ],
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Kiet', age: 33 },
        { name: event.target.value, age: 10 },
        { name: 'Bangbang', age: 9 },
      ],
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      margin: 'auto',
      padding: '8px',
      outline: 'none',
      cursor: 'pointer',
    };

    // Toggle Persons
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
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

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.togglePersonHandler}
          style={style}
        >
          Switch name
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
