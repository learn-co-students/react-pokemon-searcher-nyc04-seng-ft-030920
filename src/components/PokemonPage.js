import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    searchTerm: ''
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

  handleSearch = (event) => {
    console.log(event.target.value)

    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    let desiredPokemon = this.state.pokemonList.filter(singlePokemon =>
      singlePokemon.name.includes(this.state.searchTerm)
    )

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemon = { desiredPokemon } />
      </Container>
    )
  }
}

export default PokemonPage
