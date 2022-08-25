import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div className="Notable-Name">Owen Post</div>
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
    </div>
  );
}

export default App;