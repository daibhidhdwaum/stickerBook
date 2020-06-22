import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
     
    }
  }

  componentDidMount(){
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
  
  
  render(){

    return (
      <>
        <header>
          <h1>Sticker Book</h1>
        </header>

      </>
    );
  }
}

export default App;
