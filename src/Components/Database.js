import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "../Helpers/Icon.js";

function App() {
  return (
    <div className="project">
      <div className="name">Database System</div>
      <div className="description">
        This web application supports a complex database through Thymeleaf and
        makes calls to the database through a REST API. On the application you can add, 
        view, delete and many different objects along with other features
      </div>
      <Icon
        className="icon-1"
        icon={faBookOpen}
        url="https://cmpt345project.herokuapp.com/"
      />
      <Icon
        className="icon-2"
        icon={faGithub}
        url="https://github.com/jshggagnier/CMPT345Project"
      />
      <img
          className="picture"
          src={require("../Styles/database.jpg")}
          title="image"
          alt="database"
        />
    </div>
  );
}

export default App;
