import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemonList: [],
    sortType: "Alphabetically Ascending"
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemon => {
      this.setState({
        pokemonList: pokemon 
      })
    })
  }

  setSearchParameter = (term) => {
    console.log(term)
    this.setState(prevState => ({
      pokemonList: prevState.pokemonList.filter(pokemon => pokemon.name.includes(term))
    }))
  }

  addPokemon = (pokemon) => {
    this.setState(prevState => ({
      pokemonList: prevState.pokemonList.concat(pokemon)
    }))
  }

  getHP = (pokemon) => {
    return pokemon.stats.find(sprite => sprite.name === "hp").value
  }
  
  sortedList = () => {
    let {pokemonList, sortType}= this.state
    let pokemonListCopy = pokemonList

    switch(sortType) {
      case "Alphabetically Ascending":
        pokemonListCopy = pokemonList.sort((a, b) => {return a.name.localeCompare(b.name)})
        break;

      case "Alphabetically Descending":
        pokemonListCopy = pokemonList.sort((a, b) => b.name.localeCompare(a.name))
        break;

      case "Ascending HP":
        pokemonListCopy = pokemonList.sort((a, b) => 
          this.getHP(a) - this.getHP(b)
        )
        break;

      case "Descending HP":
        pokemonListCopy = pokemonList.sort((a, b) => 
        this.getHP(b) - this.getHP(a)
        )
        break;

      default:
        pokemonListCopy = pokemonList
    }
    return pokemonListCopy
  }

  handleSort = (evt) => {
    this.setState({
      sortType: evt.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addToPage={this.addPokemon}/>
        <br />
        <Search onChange={(evt) => this.setSearchParameter(evt.target.value)} />
        <br />
        <select value={this.state.sortType} onChange={this.handleSort}>
          <option value="Alphabetically Ascending">Alphabetically Ascending</option>
          <option value="Alphabetically Descending">Alphabetically Descending</option>
          <option value="Ascending HP">Ascending HP</option>
          <option value="Descending HP">Descending HP</option>
        </select>
        <br />
        <br />
        <PokemonCollection pokemonList={this.sortedList()}/>
      </Container>
    )
  }
}

export default PokemonPage
