import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggleImage: true
  }

  handleToggleImage = (event) => {
    console.log(event.target, this.state.toggleImage)

    this.setState({
      toggleImage: !this.state.toggleImage
    })
  }

  render() {
    
    let { name, sprites, stats } = this.props.pokemon
    let hp = stats.find(stat => stat.name === "hp").value
    let frontImage = sprites["front"]
    let backImage = sprites["back"]

    return (
      <Card>
        <div>
          <div className="image">
            { this.state.toggleImage ? <img src={frontImage} onClick={this.handleToggleImage}/> : <img src={backImage} onClick={this.handleToggleImage}/> }
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
