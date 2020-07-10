import React, { Component } from "react"
import FormularioSimple from "./formularioSimple"
import Axios from "axios";

export default class Body extends Component {
	constructor() {
		super()
		this.state = {
			data: null
		}
	}

	Vaarr = () => {
		Axios.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => { this.setState({ data }) })
	}

	componentDidMount() {
		this.Vaarr()
	}

	render() {

		return (
			<div className="App" >
				{this.state.data}
				<FormularioSimple />
			</div>
		)
	}
}
