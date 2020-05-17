import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggleImage: false
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
            <img src={frontImage} alt={name} onClick={this.handleToggleImage}/>
            { this.state.toggleImage ? <img src={frontImage}/> : <img src={backImage}/> }
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
