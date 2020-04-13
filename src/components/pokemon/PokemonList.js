import React, { Component } from 'react';

import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',
    pokemon: [],
  };

  async componentDidMount () {
    const res = await axios.get(this.state.url);
    this.setState({ 
    pokemon: res.data['results'],
  });
  console.log(this.state.previous);
  }
  render() {

    // function gotoNextPage() {
    //   setStateUrl(next)
    // }
    // function gotoPreviousPage() {
    //   setStateUrl(previous)
    // }
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
         <div>
             <h1>Loading.....</h1>
         </div>
        )}
        {/* <div>
        <Pagination 
          gotoNextPage={next}
          gotoPreviousPage={previous}
        />
      </div> */}
      </div>
    );
  }
}