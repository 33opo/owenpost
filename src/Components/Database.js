import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div className="Notable-Name">Database System</div>
      <div className="Notable">
        This application is much less about the UI and more about the database it is representing!
      </div>
      <div className="Notable-Icon1">
        <FontAwesomeIcon
          icon={faBookOpen}
          onClick={() =>
            window.open(
              "https://cmpt345project.herokuapp.com/",
              "_blank"
            )
          }
        />
      </div>
      <div className="Notable-Icon2">
        <FontAwesomeIcon
          icon={faGithub}
          onClick={() =>
            window.open("https://github.com/jshggagnier/CMPT345Project", "_blank")
          }
        />
      </div>

      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/W93XyXHI8Nw`}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}

export default App;
