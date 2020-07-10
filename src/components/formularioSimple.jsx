import React, { Component } from "react"
import P from "./p";

const validate = values => {
	const errors = {}
	if (!values.nombre)
		errors.nombre = 'Este campo es obligatorio'
	if (!values.apellido)
		errors.apellido = `El campo es obligatorio`
	return errors
}

export default class FormularioSimple extends Component {
	state = {
		errors: {

		}
	}

	handleChange = ({ target }) => {
		const { name, value } = target
		this.setState({ [name]: value })
	}

	handleSubmit = e => {
		/** Evento para manejar el envio del formulario */
		e.preventDefault()
		const { errors, ...sinErrors } = this.state
		const result = validate(sinErrors)
		this.setState({ errors: result })
		if (!Object.keys(result).length) {
			console.log("Valid form")
			e.target.reset()
		}
	}

	render() {
		const { errors } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name='nombre'
					id='nombre'
					onChange={this.handleChange} />
				{errors.nombre && <P>{errors.nombre}</P>}
				<input
					type="text"
					name="apellido"
					id="apellido"
					onChange={this.handleChange} />
				{errors.apellido && <P>{errors.apellido}</P>}
				<input type="submit" value="Botón" />
			</form>
		)
	}
}
