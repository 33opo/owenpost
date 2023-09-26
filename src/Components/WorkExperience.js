import "../Styles/Me.css";
import React from "react";

function App() {
  return (
    <div className="work">
      <div className="name">AdvisorFlow January 2023-August 2023</div>
      <div className="description">
        My first Co-op work experience was with a great company called AdvisorFlow
        based in Vancouver BC! During my tenure at AdvisorFlow I was able to acquire many new skills
        and work on some great projects.
      </div>
      <div className="projects">
        Brief overview of some projects I worked on:
        <br/>
        1. Cypress testing suite and added to GitHub Actions
        <br/>
        2. Implemented a MFA feature
        <br/>
        3. AWS Lambda script to delete certain info
        <br/>
        4. Updates of many new wireframes
      </div>
      <img className="picture" src={require("../Styles/advisorflow.png")} alt="advisorflow" 
        onClick={() =>
          window.open(
            "https://advisorflow.ca/"
          )
        }
      />
    </div>
  );
}

export default App;