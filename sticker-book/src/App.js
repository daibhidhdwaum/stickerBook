import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Sticker from "./Sticker";

class App extends Component {
  constructor() {
    super();
    this.state = {
      charactersInfo: [],
      stickerClicked: [],
    };
  }

  componentDidMount() {
    axios({
      url:
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,7,20,47,103,118,162,171,192,196,242,244,252,259,265,306,329,353,372,382]",
      method: "GET",
      responseType: "JSON",
    }).then((response) => {
      response = response.data;

      this.setState({
        charactersInfo: response,
      });
    });
  }

  handleClick = (event) => {
    let targetID = event.target.id;
    const collected = this.state.stickerClicked;

    // stop double click of sticker error
    for (let i = 0; i < collected.length; i++) {
      if (targetID === collected[i].id) {
        return;
      }
    }

    // display sticker when clicked
    const sticker = event.target.childNodes[0].classList;
    const id = event.target.id;

    sticker.remove("hidden");
    sticker.add("visible");

    // make copy of stickerClicked array
    let copyOfStickerClicked = [...this.state.stickerClicked];

    // push id of sticker to copyOfStickerClicked
    copyOfStickerClicked.push({
      id,
    });

    // assign copy to state
    this.setState({
      stickerClicked: copyOfStickerClicked,
    });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <div className="wrapper">
            <h2>Click a square to reveal the character!</h2>
            <div className="pageContainer">
              {this.state.charactersInfo.map((character, index) => {
                const key = character.id.toString();
                return (
                  <Sticker
                    stickerNumber={index + 1}
                    key={key}
                    id={key}
                    name={character.name}
                    image={character.image}
                    species={character.species}
                    status={character.status}
                    planet={character.origin.name}
                    value={this.state.stickerClicked}
                    handleClick={(event) => this.handleClick(event)}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
