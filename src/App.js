import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Kiet', age: 33 },
      { id: 2, name: 'Susu', age: 10 },
      { id: 3, name: 'Bangbang', age: 9 },
    ],
    showPersons: false,
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
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
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangeHandler(event, person.id)}
            />
          ))}
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
