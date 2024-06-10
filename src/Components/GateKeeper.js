import "../Styles/Me.css";
import React from "react";

function WorkPorjectTests() {
  return (
    <div className="work">
      <div className="name">GateKeeper Systems May 2024-December 2024</div>
      <div className="description">
        I am currently working as a System/Software Tester for GateKeeper Systems until the end of 2024. 
        After Learning a bit about QA during my time at my first Co-op I am exciting to have the chance to 
        explore more of the QA role during my time at GateKeeper.
      </div>
      <div className="projects">
        The main work I have achieved so far during my time is testing out the different cameras and DVRs GateKeeper
        has to offer for their customers. It is my job to thoroughly test the different components of the system and 
        give detailed reports to help the developers fix any issues.
      </div>
      <img className="picture" src={require("../Styles/gatekeeper.png")} alt="gatekeeper" 
        onClick={() =>
          window.open(
            "https://www.gatekeeper-systems.com/"
          )
        }
      />
    </div>
  );
}

export default WorkPorjectTests;