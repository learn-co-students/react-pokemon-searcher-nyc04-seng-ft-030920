import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    let arrayOfPokemon = this.props.pokemonList.map((singlePokemon) => {
      return <PokemonCard pokemon={singlePokemon} key={singlePokemon.id}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        {arrayOfPokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection
