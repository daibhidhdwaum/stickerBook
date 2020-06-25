import React from "react";

const Sticker = (props) => {
  return (
    <div className="stickerContainer" key={props.id}>
      <button
        className="imageContainer"
        onClick={props.handleClick}
        id={props.id}
        stickernumber={props.stickerNumber}
        value="button"
      >
        {/* this is the sticker image */}
        <img
          className="sticker hidden"
          src={props.image}
          alt={props.name}
          onClick={props.handleClick}
          id={props.id}
        />
      </button>
      <div className="info">
        {/* Character details */}
        <h3 className="characterInfo">
          Name: <span className="characterDetails">{props.name}</span>
        </h3>
        <p className="characterInfo">
          Species: <span className="characterDetails">{props.species}</span>
        </p>
        <p className="characterInfo">
          Status: <span className="characterDetails">{props.status}</span>
        </p>
        <p className="characterInfo">
          Planet: <span className="characterDetails">{props.planet}</span>
        </p>
      </div>
    </div>
  );
};

export default Sticker;
