import "../Styles/Me.css";
import "../Styles/App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon(props) {
    return (
      <div className={props.className}>
        <FontAwesomeIcon
          icon={props.icon}
          onClick={() =>
            window.open(
              props.url
            )
          }
        />
      </div>
    );
}
