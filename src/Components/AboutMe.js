import "../Styles/Me.css";
import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="name">Owen Post</div>
      <div className="description">
        Hello and welcome! I am a 3rd year software systems student at Simon
        Fraser University. Some of my more outdoorsy hobbies include Soccer,
        Hockey, Spikeball, and Hiking. But I also enjoy staying home and watching some good
        movies, anime, reading or playing board games!
      </div>
      <img className="picture" src={require("../Styles/Me2.jpg")} alt="Me" />
    </div>
  );
}

export default AboutMe;
