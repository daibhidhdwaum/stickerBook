import React from "react";

const Sticker = (props) => {
  return (
    <div className="flex stickerContainer" key={props.id}>
      <button
        className="imageContainer"
        onClick={props.handleClick}
        id={props.id} 
        stickernumber={props.stickerNumber} 
        value="button"
      >{props.stickerNumber}
        <img
          className="sticker hidden"
          src={props.image}
          alt={props.name}
          onClick={props.handleClick}
          id={props.id}
        />
      </button>
      <div>
        <h2>name: {props.name}</h2>
        <p>species: {props.species}</p>
        <p>status: {props.status}</p>
        <p>Planet: {props.planet}</p>
      </div>
    </div>
  );
};




export default Sticker;
