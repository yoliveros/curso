import React, { Component } from "react";
import Cabezera from "./cabezera";
import P from "./p";

export default class Body extends Component {
  state = {
    miau: "Bienvenido a miau",
  };

  cambiarTextoDelEstado = () => {
    this.setState({ miau: "Hola Mundo" });
  };

  manejaClick = (texto) => {
    console.log(texto);
  };

  render() {
    const { miau } = this.state;
    return (
      <div className="App">
        <Cabezera miau={miau} manejaClick={this.manejaClick} />
        <P onClick={this.cambiarTextoDelEstado}>{miau}</P>
      </div>
    );
  }
}
