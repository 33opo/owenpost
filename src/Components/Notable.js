import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {Icon} from "../Helpers/Icon.js";
import {Video} from "../Helpers/Video.js";

function App() {
  return (
    <div className="project">
      <div className="name">Notable</div>
      <div className="description">
        This application allows a user to upload a youtube video or pdf and take
        notes. Users can also make presentations and use many more features as
        shown in the video! Developed with a React frontend and a NodeJS backend 
        along with various APIs. 
      </div>
      <Icon className="icon-1" icon={faBookOpen} url="https://stormy-plateau-24106.herokuapp.com/"/>
      <Icon className="icon-2" icon={faGithub} url="https://github.com/33opo/notable"/>
      <Video url="https://www.youtube.com/embed/NVWfohvp_Lw"/>
    </div>
  );
}

export default App;
