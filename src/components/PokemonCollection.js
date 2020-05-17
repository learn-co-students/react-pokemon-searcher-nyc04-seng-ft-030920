import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  state = {
    pokemonList: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then((pokemonArr) => {
      this.setState({
        pokemonList: pokemonArr
      })
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <PokemonCard pokemons = {this.state.pokemonList}/>
        <PokemonCard pokemons = {this.state.pokemonList}/>
        <PokemonCard pokemons = {this.state.pokemonList}/>
        <PokemonCard pokemons = {this.state.pokemonList}/>
        <PokemonCard pokemons = {this.state.pokemonList}/>
        <PokemonCard pokemons = {this.state.pokemonList}/>
      </Card.Group>
    )
  }
}

export default PokemonCollection
