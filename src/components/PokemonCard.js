import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: true
  }

  handleFlip = () => {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked
    }))
  }

  render() {
    let {name, sprites, stats} = this.props.pokemon
    let hp = stats.find((stat) => stat.name === 'hp').value

    return (
      <Card>
        <div>
          <div className="image">
            {this.state.isClicked ? <img src={sprites.front} alt="front pic" onClick={this.handleFlip}/> : <img src={sprites.back} alt="back pic" onClick={this.handleFlip}/>}
          </div>
          <div className="content">
            <div className="header">{name}</div>
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
