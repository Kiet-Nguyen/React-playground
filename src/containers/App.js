import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation';
import Blog from './Blog/Blog';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Kiet', age: 33 },
      { id: 2, name: 'Susu', age: 10 },
      { id: 3, name: 'Bangbang', age: 9 },
    ],
    showPersons: false,
    textLength: 0,
  }

  togglePersonHandler = () => {
    const { showPersons } = this.state;
    const doesShow = showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangeHandler = (event, id) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(person => person.id === id);
    const person = {
      ...persons[personIndex],
    };
    person.name = event.target.value;
    const newPersons = [...persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons });
  }

  deletePersonHandler = (personIndex) => {
    const { persons } = this.state;
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  }

  onChangeLengthHandler = (event) => {
    const length = event.target.value.length;
    this.setState({ textLength: length });
  }

  render() {
    const { showPersons, persons, textLength } = this.state;

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      margin: '2rem auto',
      padding: '10px 16px',
      outline: 'none',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    // Toggle Persons
    let personItems = null;
    if (showPersons) {
      personItems = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black',
      };
    }

    const classes = [];
    if (persons.length <= 2) {
      classes.push('red');
    }
    if (persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <>
        <Blog />
        <StyleRoot>
          <div className="App">
            {personItems}

            <div>
              <label htmlFor="validation">
                Validate text length in input field
              </label>
              <input
                id="validation"
                type="text"
                onChange={this.onChangeLengthHandler}
              />
              <Validation length={textLength} />
            </div>
          </div>
        </StyleRoot>
      </>
    );
  }
}

export default Radium(App);
