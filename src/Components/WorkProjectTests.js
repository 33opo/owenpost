import "../Styles/Me.css";
import React from "react";

function WorkPorjectTests() {
  return (
      <div className="tests">
      <div className="name">AdvisorFlow: Cypress Test Suite</div>
      <div className="description">
        during my time at AdvisorFlow one of the major tasks I undertook was updating
        and implementing new test cases for our Cypress testing suite. I updated all of our 
        outdated testcases and created new ones for recently implemented functionality. Once the
        test suite was in good order I added it to our GitHub Actions so that it would run on 
        every deploy which greatly increased the quality assurance of the application.
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