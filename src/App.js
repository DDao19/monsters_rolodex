import React, { Component } from 'react';

import './App.css';
import Card_List from './components/Card_List/Card_List'
import Search_Box from './components/SearchBox/Search_Box'
import Scroll from './components/Scroll/Scroll'


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">Monsters</h1>
        <Search_Box 
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <Scroll>
          <Card_List monsters={filteredMonsters} />
        </Scroll> 
      </div>
    );
  }
}

export default App;
