import React from "react";
import Popup from "reactjs-popup";

const ToolIcon = ({ image, name, rounded = false }) => {
  return (
    <div>
      <Popup
        trigger={
          <img
            className={`h-10 w-10${rounded && " rounded-full"}`}
            src={image}
            alt={name}
          />
        }
        on={["hover", "focus"]}
        position="top"
        closeOnDocumentClick
      >
        <span className="text-center">{name}</span>
      </Popup>
    </div>
  );
};

export default ToolIcon;
