import React, { Component } from "react";
import axios from "axios";
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
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,7,20,47,103,118,162,171,196,242,244,252,259,265,306,329,353,372]",
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

    // hide sticker number when clicked
    const stickerNum = event.target.classList;
    stickerNum.add("hideNumber");

    // display sticker when clicked
    const sticker = event.target.childNodes[1].classList;
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
        <header>
          <div></div>
          {/* div stores background image */}
          <h1>
            <span className="visuallyHidden">Rick and Morty</span> Sticker Book
          </h1>
        </header>
        <main>

          <h2>Click a square to reveal the character!</h2>
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
        </main>
      </>
    );
  }
}

export default App;
