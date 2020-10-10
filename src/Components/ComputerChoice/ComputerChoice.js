import React from "react";
import "./ComputerChoice.css";

const ComputerChoice = (props) => {
  return (
    <>
      {props.computerResult && (
        <div className="computerDisplay cardMedia">
          <img

            src={
              process.env.PUBLIC_URL + `images/${props.computerResult}-icon.png`
            }
            alt="Karen"
          />
        </div>
      )}
      {!props.computerResult && <div>?</div>}
    </>
  );
};

export default ComputerChoice;
