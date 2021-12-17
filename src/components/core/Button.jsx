import React from "react";

const Button = ({
  text,
  background,
  textColor,
  fontWeight,
  rounded = false,
  hoverBackground,
  shadow = false,
  prefix,
  suffix,
  size = "px-2 py-2",
  onClick = () => {
    console.log("You have not setup this button properly");
  },
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${size} ${background} ${hoverBackground} ${
        rounded && "rounded-lg"
      } transition-all duration-200 ${
        shadow && "shadow-md"
      } ${textColor} ${fontWeight}`}
    >
      {prefix && prefix}
      {text}
      {suffix && suffix}
    </button>
  );
};

export default Button;
