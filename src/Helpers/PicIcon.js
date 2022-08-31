import "../Styles/Me.css";
import "../Styles/App.css";
import React from "react";

export function PicIcon(props) {
    return (
      <img
        className={props.className}
        onClick={() =>
            window.open(props.url, "_blank")
        }
        src={require("../Styles/" + props.className + ".png")}
        alt={props.className}
      />
    );
}
