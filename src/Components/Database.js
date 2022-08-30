import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "../Helpers/Icon.js";
import { Video } from "../Helpers/Video.js";

function App() {
  return (
    <div>
      <div className="Notable-Name">Database System</div>
      <div className="Notable">
        This application is much less about the UI and more about the database
        it is representing!
      </div>
      <Icon
        className="Notable-Icon1"
        icon={faBookOpen}
        url="https://cmpt345project.herokuapp.com/"
      />
      <Icon
        className="Notable-Icon2"
        icon={faGithub}
        url="https://github.com/jshggagnier/CMPT345Project"
      />
      <Video url="https://www.youtube.com/embed/W93XyXHI8Nw" />
    </div>
  );
}

export default App;
