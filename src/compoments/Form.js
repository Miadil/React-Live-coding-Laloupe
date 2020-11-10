import React from 'react'

class Form extends React.Component {
	state = {
		firstName: "abdou",
		email:"",
		name: "chicken lord"
	}
	handleChange = (event) => {
		if(!event.target.value.includes('*')){
			this.setState({[event.target.name]: event.target.value})
		}
	}

  render() {
		console.log(this)
    return (
      <div>
				{this.state.name}
				<p>firstname : {this.state.firstName}</p>
				<p>email : {this.state.email}</p>
        <p><input name="firstName" type='text' value={this.state.firstName} onChange={this.handleChange}/></p>
				<p><input name="email" type='email' value={this.state.email} onChange={this.handleChange}/></p>
      </div>
    )
  }
}

export default Form