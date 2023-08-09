import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{color: 'black'}}>Copyright ⓒ {year}</p>
      <p style={{color: 'black'}}>By Om</p>
    </footer>
  );
}

export default Footer;
