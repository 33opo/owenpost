import "../Styles/Me.css";
import React from "react";

function App() {
  var today = new Date();
  let time = today.getHours();
  let formatTime = "";
  if (time > 12) {
    formatTime = time - 12;
    formatTime = formatTime + " PM";
  } else {
    formatTime = time + " AM";
  }

  return (
    <div className="where-at">
      <div className="name">Where I'm at Right Now</div>
      <div className="description">seeing as its {formatTime}, I'm probably
      {time < 8 && (" sleeping")}
      {time >= 8 && time < 18 && (" doing some coding!")}
      {time >= 18 && (" watching a movie or reading!")}
      <br/>
      But besides that, I am currently Searching for Co-op opportunities during this 2023 summer semester!
      </div>
    </div>
  );
}

export default App;
