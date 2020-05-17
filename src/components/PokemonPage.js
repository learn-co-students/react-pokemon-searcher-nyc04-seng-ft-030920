import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonList: []
    // searchTerm: ''
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
    // let desiredPokemon = this.state.pokemonList.filter(singlePokemon =>
    //   singlePokemon.name.includes(this.state.searchTerm)
    // )

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemon = { this.state.pokemonList } />
      </Container>
    )
  }
}

export default PokemonPage
