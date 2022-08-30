import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {Icon} from "../Helpers/Icon.js";

function App() {
  return (
    <div>
      <Icon className="Icon1" icon={faLinkedin} url="https://www.linkedin.com/in/owenpost/"/>
      <Icon className="Icon2" icon={faGithub} url="https://github.com/33opo"/>
      <Icon className="Icon3" icon={faEnvelope} url="mailto:olp1@sfu.ca"/>
      <div className="PhoneNumber">+1 604 - 786 - 0776</div>
    </div>
  );
}

export default App;