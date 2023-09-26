import "../Styles/Me.css";
import React from "react";

function WorkPorjectTests() {
  return (
      <div className="aws">
      <div className="name">AdvisorFlow: AWS Lambda</div>
      <div className="description">
        For this project I got to work with AWS and specifically AWS Lambda to create a script
        that deleted outdated data. Prior to this project I had never worked with AWS before,
        so working with this new tool along with docker on this critical script was a great learning
        experience.
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

export default WorkPorjectTests;