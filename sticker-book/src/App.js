import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Sticker from "./Sticker"

class App extends Component {
  constructor() {
    super();
    this.state = {
      charactersInfo: []
    };
  }

  componentDidMount() {
    axios({
      url: "https://rickandmortyapi.com/api/character/[1,2,3]",
      method: "GET",
      responseType: "JSON",
    }).then((response) => {
      console.log(response);
      response = response.data;

      this.setState({
        charactersInfo: response,
      });
    });
  }

  render() {
    return (
      <>
        <header>
          <h1>Sticker Book</h1>
        </header>
        {this.state.charactersInfo.map((character) => {
          {console.log(character)}
          return <>
          <Sticker 
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}/>
          </>;
        })}
        |
      </>
    );
  }
}

export default App;
