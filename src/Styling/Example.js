import React, { Component } from "react";
import './Color.css'

export class LStyle extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello</h1>
      </div>
    );
  }
}

export class Header extends Component {
  render() {
    const styling = {
      color: "blue",
      fontFamily: "Arial",
    }
    return (
      <div>
        <h2 style={styling}>LAPTOP</h2>
      </div>
    );
  }
}
