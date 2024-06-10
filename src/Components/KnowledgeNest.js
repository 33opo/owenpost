import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {Icon} from "../Helpers/Icon.js";

function KnowledgeNest() {
  return (
    <div className="project">
      <div className="name">KnowledgeNest</div>
      <div className="description">
        The goal of this application was to use Micro service architecture along with various AWS services
        to create a functional web app. The application allows users to upload questions and to practice questions
        to help prepare for interviews and spread knowledge.
      </div>
      <Icon className="icon-1" icon={faBookOpen} url="https://main.d20l28jzw4qfix.amplifyapp.com/"/>
      <Icon className="icon-2" icon={faGithub} url="https://github.com/33opo/cmpt474"/>
      <img
          className="picture"
          src={require("../Styles/diagram.png")}
          title="image"
          alt="diagram"
        />
    </div>
  );
}

export default KnowledgeNest;