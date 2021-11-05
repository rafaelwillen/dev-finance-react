import React from "react";

const TextButton = ({ onClick, content, colorClass }) => {
  return (
    <button onClick={onClick} className={`text-button ${colorClass}`}>
      {content}
    </button>
  );
};

TextButton.defaultProps = {
  onClick: () => console.log("Text Button clicked"),
  content: "Text Button",
  colorClass: "primary-color",
};

export default TextButton;
