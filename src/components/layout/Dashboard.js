import React, { Component } from 'react';

import PokemonLins from '../pokemon/PokemonList';



export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PokemonLins />
                </div>
            </div>
        );
    }
}