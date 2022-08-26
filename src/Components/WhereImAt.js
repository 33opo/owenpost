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
    <div>
      <div className="Title">Where I'm at Right Now</div>
      <div className="Time">seeing as its {formatTime}, I'm probably
      {time < 8 && (" sleeping")}
      {time >= 8 && time < 18 && (" doing some coding!")}
      {time >= 18 && (" watching a movie or reading!")}
      </div>
      <div className="After-Desc">
        But besides that, I am currently Searching for Co-op opportunities during this 2022 fall semester!
      </div>
    </div>
  );
}

export default App;
