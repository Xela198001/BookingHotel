import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classCard:
        "btn bg-btnGold w-48 h-12  mt-12 text-white text-center font-bold z-20 relative",
      classModal:
        "btn bg-btnGold w-48 h-12  mt-12 text-white text-center font-bold z-20 relative",
    };
  }
  render() {
    return (
        <Link
          to={ this.props.to}
          className="flex justify-center items-center w-full h-full block box-border"
        >
        <span>{ this.props.text }</span>
        </Link>
    );
  }
}

export default Btn;