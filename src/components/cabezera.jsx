import React, { Component } from "react";
import H1 from "./h1";
import logo from "../logo.svg";

const style = {
  header: ({ backgroundColor }) => ({
    backgroundColor: backgroundColor,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }),
};

export default class Cabezera extends Component {
  state = {
    backgroundColor: "#282c34",
  };

  cambiaColorHeader = () => {
    this.setState({ backgroundColor: "#555" });
  };

  manejaClick = () => {
    const { miau, manejaClick } = this.props;
    manejaClick(miau);
  };

  render() {
    const { miau } = this.props;
    const { backgroundColor } = this.state;
    return (
      <header
        onClick={this.cambiaColorHeader}
        style={style.header({ backgroundColor })}
      >
        <img
          onClick={this.manejaClick}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <H1>{miau}</H1>
      </header>
    );
  }
}
