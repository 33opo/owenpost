import "../Styles/Me.css";
import React from "react";

function App() {
  return (
    <div>
      <div className="Name">Owen Post</div>
      <div className="Description">
        Hello and welcome! I am a 2nd year software systems student at Simon Fraser University.
        Some of my more outdoorsy hobbies include Soccer, Hockey, and Hiking. But I also enjoy
        staying home and watching some good movies, anime, or reading!
      </div>
      <img className="Picture" src={require("../Styles/Me2.jpg")} alt="Me"/>
    </div>
  );
}

export default App;