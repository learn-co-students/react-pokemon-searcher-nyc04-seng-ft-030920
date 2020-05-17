import React, {Component} from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends Component {
  render() {
    return (
      <Card.Group itemsPerRow = {6}>
        {this.props.pokemon.map((singlePokemon) => {
          return <PokemonCard key = {singlePokemon.id} pokemon = {singlePokemon} />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
