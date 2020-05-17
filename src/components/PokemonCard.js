import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    click: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      click: !prevState.click
    }))
  }

  render() {
    // console.log(this.props.pokemon)
    // console.log(this.state.click)
    let {name, sprites, stats} = this.props.pokemon
    let frontImage = sprites.front
    let backImage = sprites.back
    let hpObj = stats.find(stat => stat.name === "hp")
    return (
      <Card>
        <div>
          <div className="image">

           {!this.state.click
           ?
            <img src={frontImage} alt={name} onClick={this.handleClick}/>
            :
            <img src={backImage} alt={name} onClick={this.handleClick}/>}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
