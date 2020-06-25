import React from "react";

const Header = () => {
  return (
    <header>
      <div className="backgroundImage"></div>
      {/* div stores background image */}
      <h1>
        <span className="visuallyHidden">Rick and Morty</span> Sticker Book
      </h1>
    </header>
  );
};

export default Header;
