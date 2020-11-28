import React, { useState } from "react";
// import Card from "../ArtStudio/Card/Card";
import Items from "../ArtStudio/Cards/Items";
import ListItems from "./Description/ListItems/ListItems";
import ListItem from "./Description/ListItems/ListItem";

function Details() {
  const [visible, setVisible] = useState(false);

  // loadItem = () => {
  //   this.setState({
  //     vis: this.state.vis + 1,
  //   });
  //   console.log(this.state.vis);
  // };

     return (
      <div>
        {Items.map((item,index) => (
          <ListItems  listItems={item} key={index} visibility={ visible }/>
        ))}
        {/* <div>
          <div>
            <section>
              <div>
                {/* <svg class="x-rd__close-icon">
                  <use xlink:href="#remove"></use></svg> */}
                </div>
            
    );
  }

export default Details;
