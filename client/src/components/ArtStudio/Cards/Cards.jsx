import React, { Component } from "react";
import Items from "./Items";
import Card from "../Card/Card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Items,
    };
  }

  render() {
    const cards = this.state.cards;
  
    return (
      <>
        <div className="flex pt-20">
          {cards.map((item) => (
            <Card
              item={item}
              handleClick={this.props.handleClick}
              key={item.id}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
