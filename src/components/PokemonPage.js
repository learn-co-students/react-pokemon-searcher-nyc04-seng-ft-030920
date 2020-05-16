import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemonList: [],
    searchName: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemonArray => {
        this.setState({
          pokemonList: pokemonArray
        })
      })
  }

  addPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(pokemon)
    })
      .then(r => r.json())
      .then(pokemon => {
        let newPokemonList = [...this.state.pokemonList, pokemon]
        this.setState({
          pokemonList: newPokemonList
        })
      })
  }

  handleSearch = (e) => {
    let {name, value} = e.target
      this.setState({
        [name]: value
      })
  }

  filterPokemon = () => {
    if (this.state.searchName === "") {
      return this.state.pokemonList
    } else {
      return this.state.pokemonList.filter(pokemon => pokemon.name.includes(this.state.searchName))
    }
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearch} searchName={this.state.searchName}/>
        <br />
        <PokemonCollection pokemonList={this.filterPokemon()} />
        
      </Container>
    )
  }
}

export default PokemonPage
