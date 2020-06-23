import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Sticker from "./Sticker"


class App extends Component {
  constructor() {
    super();
    this.state = {
      charactersInfo: [],
      visible: false,
      stickerClicked: []
    };
  }

  componentDidMount() {
    axios({
      url: "https://rickandmortyapi.com/api/character/[1,2,3,4,5,7,20,47,103,118,162,171,196,242,244,252,259,265,306,329,353,372]",
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
    event.preventDefault();
  
    let copyOfVisible = this.state.visible;
    copyOfVisible = true;
    console.log(event.target.id)

    const sticker = event.target.childNodes[1].classList;

    sticker.remove("hidden");
   
    sticker.add("visible");
  


    console.log(event.target.childNodes[1].classList)
  
      console.log(this.state.visible)
  }

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
