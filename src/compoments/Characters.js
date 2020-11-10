import React from 'react'
import axios from 'axios'

class Characters extends React.Component {
	state = {
		characters: [],
		isLoaded: false
	}
	getCharacters = () => {
		axios.get('http://hp-api.herokuapp.com/api/characters')
		.then(res => this.setState({characters: res.data, isLoaded: true}))
	}
	componentDidMount() {
		this.getCharacters()

	}
	render(){
		console.log("character : ", this.state.characters)
	  return (
			<>
			{
				!this.state.isLoaded ? (
					<div>Loading ...</div>
				) : (	
				<div>							
					{
					this.state.characters.map((character, index) => <div key={index}>				
						<img src={character.image} alt={character.name} />				
						<p>{character.name}</p>				
					</div>)
					}
			</div>)
			}
    </>
		)
  }
}

export default Characters