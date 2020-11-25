import React, { Component } from "react";
import ListItem from "./ListItem";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: "",
    };
  }
  // componentDidMount() {
  //   this.setState((state, props) => ({
  //     ListItems: props.item,
  //   }));
  // }
  // componentDidMount() {
  //   this.setState({
  //     vis: this.props.items,
  //   });
  // }

  render() {
    // console.log(this.state.vis);
    return (
      <div
        className="w-20 h-20 border-2 cursor-pointer"
        // onClick={this.props.handleClick}
      >
        {this.props.visibility ? this.props.load : this.props.load}
        {/* {console.log(this.state.vis)} */}
        {this.props.items.map((item, index) => (
          <ListItem
            items={item}
            key={index}
            handleClick={this.props.handleClick}
            visibility={this.props.visibility}
          />
        ))}
      </div>
    );
  }
}

export default ListItems;
