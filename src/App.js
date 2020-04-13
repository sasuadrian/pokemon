import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import PokemonSearch from './components/layout/PokemonSearch';
import Pagination from './components/layout/Pagination';



class App extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon',

  }
  
  
  render() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <Pagination />
          <PokemonSearch />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
