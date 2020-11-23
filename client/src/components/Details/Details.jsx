import React, { Component } from "react";

import Card from "../ArtStudio/Card/Card";
import Items from "../ArtStudio/Cards/Items";
import AudioVideo from "./Description/AudioVideo/AudioVideo";
import Beds from "./Description/beds/beds";
import Bathroom from "./Description/bathroom";
import Communication from "./Description/communication";
import Electronics from "./Description/electronics";
import Etc from "./Description/etc";
import Furniture from "./Description/furniture/furniture";
import ViewWindow from "./Description/viewWindow/viewWindow";

class Details extends Component {
  state = {  }
  render() {
    return (
      <div className="container">
        <div className="flex">
          <div className="details-photo"></div>
          <div className="details-body">
            <div></div>
            <div></div>
            <div className="details-description">
              <div></div>
              <div>
                <AudioVideo />
                <Bathroom />
                <Beds />
                <Communication />
                <Electronics />
                <Etc />
                <Furniture />
                <ViewWindow />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Details;