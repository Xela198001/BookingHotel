import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
    this.load = this.load.bind(this);
    this.handleHide = this.handleHide.bind(this);
    // this.state.visible ? console.log(this.state.visible) : console.log("Нет");
  }

  // componentWillUnmount() {
  //   this.load()
  // }

  // componentDidUpdate() {
  //   this.load()
  // }

  // handleShow() {
  //   this.setState({
  //     visible: !this.state.visible
  //   });
      
  // }

  handleHide = (visible) => {
    visible = false;

  }

  load = () => {
    this.setState({
item: this.props.items
    })
  }



  render() {
    let visible = this.props.visibility;
    return (
      <>
        {visible
          ? <ul className="block w-full h-full" onClick={this.handleHide(visible)}>{this.props.items.list.map((list) => <li>{list}</li>)}</ul>
          : null}
      </>
    );
  }
}

export default ListItem;