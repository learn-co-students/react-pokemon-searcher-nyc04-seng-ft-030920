import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    
    let { name, sprites, stats } = this.props.pokemon
    let hp = stats.find(stat => stat.name === "hp").value
    let frontImage = sprites["front"]

    return (
      <Card>
        <div>
          <div className="image">
            <img src={frontImage} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
