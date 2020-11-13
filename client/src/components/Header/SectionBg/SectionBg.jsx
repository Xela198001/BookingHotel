import React, { Component } from "react";
import "./SectionBg.css";

class SectionBg extends Component {
  render() {
    return (
      <div className="SectionBg text-white flex items-end">
        <div className="flex flex-col p-8 container">
          <h4>Дом вдали от дома</h4>
          <h1>ARTSTUDIO - апарт-отель в</h1>
          <h1>Санкт-Петербурге</h1>
        </div>
      </div>
    );
  }
}

export default SectionBg;
