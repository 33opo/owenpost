import "../Styles/Me.css";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div className="Icon1">
        <FontAwesomeIcon
          icon={faLinkedin}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/owenpost/",
              "_blank"
            )
          }
        />
      </div>
      <div className="Icon2">
        <FontAwesomeIcon
          icon={faGithub}
          onClick={() =>
            window.open("https://github.com/33opo", "_blank")
          }
        />
      </div>
      <div className="Icon3">
        <FontAwesomeIcon
          icon={faEnvelope}
          onClick={() =>
            window.open("mailto:olp1@sfu.ca", "_blank")
          }
        />
      </div>
      <div className="PhoneNumber">+1 604 - 786 - 0776</div>
    </div>
  );
}

export default App;