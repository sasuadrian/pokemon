import React from "react"


class PokemonSearch extends React.Component {
    constructor() {
    super()

    this.state = {
      pokename: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(name => this.setState({pokename: name}))
  }
    render() {
      const { pokename, searchField } = this.state;
      const filterMonsters = pokename.filter(pokename => 
        pokename.toLowerCase().includes(searchField.toLowerCase())
        );
  
      return (
        
  <div className="imageSearch">
    <form  className="imageSearch__form">
      <input  onChange={e => 
          this.setState({ searchField: e.target.value })
        } 
       type="search" placeholder="search for images..." pokename={filterMonsters}/>
    </form>
  </div>

      )
    }
  }
  
  export default PokemonSearch