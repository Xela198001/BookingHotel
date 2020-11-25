import React, { Component } from "react";
// import Card from "../ArtStudio/Card/Card";
import Items from "../ArtStudio/Cards/Items";
import ListItems from "./Description/ListItems/ListItems";
import ListItem from "./Description/ListItems/ListItem";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      vis: 1,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.loadItem = this.loadItem.bind(this);
  }

  toggleModal() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  loadItem = () => {
    this.setState({
      vis: this.state.vis + 1,
    });
    console.log(this.state.vis);
  };

  render() {
    return (
      <div className="container">
        <div className="flex">
          <div className="details-photo"></div>
          <div className="details-body">
            <div></div>
            <div></div>
            <div
              className="details-description"
                // onClick={() => {
                //   this.load()
                // }}
            >
              <div></div>
              <div>
                {Items.map((item, index) => (
                  <>
                    <ListItems
                      list="Аудио/Видео"
                      items={item.details}
                      key={index}
                      handleClick={this.toggleModal}
                      visibility={this.state.visible}
                      load={this.loadItem}
                    />
                    {/* <ListItems
                      list="Интернет/Телефония"
                      item={item.details.map((item) => item.communication)}
                    />
                    <ListItems
                      list="Электроника"
                      item={item.details.map((item) => item.electronics)}
                    />
                    <ListItems
                      list="ванная комната"
                      item={item.details.map((item) => item.bathroom)}
                    />
                    <ListItems
                      list="Внешняя территория и вид из окон"
                      item={item.details.map((item) => item.viewWindow)}
                    />
                    <ListItems
                      list="Кровати"
                      item={item.details.map((item) => item.bed)}
                    />
                    <ListItems
                      list="Мебель"
                      item={item.details.map((item) => item.furniture)}
                    />
                    <ListItems
                      list="Прочее"
                      item={item.details.map((item) => item.etc)}
                    /> */}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
