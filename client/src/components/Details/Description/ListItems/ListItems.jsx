import React, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import ListItem from "./ListItem";

function ListItems(props) {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState(props.listItems);
    
    // this.handleShow = this.handleShow.bind(this);
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
  
  const handleShow = () => {
    setVisible(!visible)
  }

    return (
      <div className="flex-1 h-40 border-2 cursor-pointer" onClick={handleShow}>
        <button className="w-20 h-10 bg-btnGold" onClick={() => setItem('')}></button>
        {item.details.map((item, index) => (
          <ListItem
            items={item}
            key={index}
            onClick={() => setItem("")}
            visibility={visible}
          />
        ))}
        {console.log(item)}
        {console.log(setItem)}
      </div>
    );
  }

export default ListItems;
