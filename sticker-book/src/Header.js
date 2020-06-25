import React from "react";

const Header = () => {
  return (
    <header>
      <div className="backgroundImage"></div>
      {/* div stores background image */}
      <div className="entryBar">
        <div className="arrow">
          <i className="fas fa-arrow-down" ></i>
        </div>
        <h1>
          <span className="visuallyHidden">Rick and Morty</span> Sticker Book
        </h1>
        <div className="arrow">
          <i className="fas fa-arrow-down"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
