import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state={
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleInputs = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    let pokemon = {
      name: this.state.name,
      stats: [
        {"value": 0,
        "name": "special-defense"},
        {"value": 0,
        "name": "special-attack"},
        {"value": 0,
        "name": "defense"},
        {"value": 0,
        "name": "attack"},
        {"value": 0,
        "name": "speed"},
        {"value": this.state.hp,
        "name": "hp"}
      ],
      sprites: {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }

    }
    this.props.addPokemon(pokemon)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputs}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleInputs}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleInputs}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleInputs}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
