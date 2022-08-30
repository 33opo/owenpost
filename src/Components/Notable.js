import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {Icon} from "../Helpers/Icon.js";
import {Video} from "../Helpers/Video.js";

function App() {
  return (
    <div>
      <div className="Notable-Name">Notable</div>
      <div className="Notable">
        This application allows a user to upload a youtube video or pdf and take
        notes. Users can also make presentations and use many more features as
        shown in the video!
      </div>
      <Icon className="Notable-Icon1" icon={faBookOpen} url="https://stormy-plateau-24106.herokuapp.com/"/>
      <Icon className="Notable-Icon2" icon={faGithub} url="https://github.com/33opo/notable"/>
      <Video url="https://www.youtube.com/embed/NVWfohvp_Lw"/>
    </div>
  );
}

export default App;
