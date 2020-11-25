import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: 1,
      visible: false,
    };
    // this.load = this.load.bind(this);
    // this.state.visible ? console.log(this.state.visible) : console.log("Нет");
  }

  // componentDidMount() {
  //   this.load()
  // }

  

  render() {
    return (
      <div className="w-full h-full" onClick={this.props.handleClick}>
        <ul>
          {/* {console.log(this.props.visibility)} */}
          {this.props.visibility ? this.load : "null"}
          {/* {console.log(this.props.items)} */}
          {/* {this.props.item.map((item, index) => (
           <li key={index}>{item}</li>
        ))} */}
        </ul>
      </div>
    );
  }
}

export default ListItem;