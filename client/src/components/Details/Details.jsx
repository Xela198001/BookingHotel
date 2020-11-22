import React, { Component } from "react";
import Card from "../ArtStudio/Card/Card";
import Items from "../ArtStudio/Cards/Items";

class Details extends Component {
  state = {  }
  render() {
    return (
      <Card item={ Items[0]}/>
      
    );
  }
}

export default Details;