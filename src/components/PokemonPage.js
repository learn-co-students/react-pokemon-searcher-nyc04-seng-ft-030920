import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemonList: [],
    search: ''
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`).then(r => r.json())
    .then((listOfPokemon) => {
      this.setState({pokemonList: listOfPokemon})
    })
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  submitFetch = (newPokeObj) => {
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      headers: {"Content-Type": 'applicatin/json'},
      body: JSON.stringify({
        name: newPokeObj.name,
        stats: [{value: newPokeObj.hp, name: 'hp'}],
        sprites: {front: newPokeObj.frontUrl, back: newPokeObj.backUrl}
      })
    }).then(r => r.json()).then((newPokemon) => {
      let newPokeList = [...this.state.pokemonList, newPokemon]
      this.setState({pokemonList: [newPokeList]})
    })
  }

  render() {

    let wantedPokemon = this.state.pokemonList.filter((pokemon) => pokemon.name.includes(this.state.search) )

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitFetch={this.submitFetch}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemonList={wantedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
