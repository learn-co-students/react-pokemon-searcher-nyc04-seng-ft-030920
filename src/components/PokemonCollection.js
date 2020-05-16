import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokemonArray = this.props.pokemonList.map(pokemon => {
      return <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
              />
    })
    return (
      <Card.Group itemsPerRow={6}>{pokemonArray}</Card.Group>
    )
  }
}

export default PokemonCollection
