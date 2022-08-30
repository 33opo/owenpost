import "../Styles/Me.css";
import "../Styles/App.css";
import React from "react";

export function Video(props) {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={props.url}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
}
