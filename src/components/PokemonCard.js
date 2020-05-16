import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    imgSideOne: true
  }

  toggleImg = () => {
    let {imgSideOne} = this.state
    this.setState({
      imgSideOne: !imgSideOne})
  }

  render() {
    let {name} = this.props.pokemon
    let {front: frontImg, back: backImg} = this.props.pokemon.sprites
    let hp = this.props.pokemon.stats.find(stat => {return stat.name === "hp"}).value
    // console.log(this.props.pokemon.sprites)
    return (
      <Card onClick={this.toggleImg}>
        <div>
          <div className="image">
            <img src={this.state.imgSideOne ? frontImg : backImg} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
