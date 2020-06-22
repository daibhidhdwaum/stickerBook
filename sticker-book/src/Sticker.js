import React from "react";

const Sticker = (props) => {
    return(
        <>
            <img src={props.image} alt={props.name} />
            <h2>name: {props.name}</h2>
            <p>species: {props.species}</p>


        </>
    )
}

export default Sticker;