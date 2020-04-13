import React, { Component } from 'react';


export default class NavBar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   <a href="#" className="navbar-brand col-sm-5 col-md-2 mr-0 align-items-center">Pokedex</a>
               </nav>
            </div>
        );
    }
}