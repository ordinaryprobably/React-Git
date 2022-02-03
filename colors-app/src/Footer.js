import React from "react";

export default function Footer(props) {
  const { paletteName, emoji } = props;

  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  )
}