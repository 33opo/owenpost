import "../Styles/App.css";
import React from "react";

function App() {
  return (
    <div>
      <div className="InterestsName">Personal Interests</div>
      <div className="InterestsDescription">
        I like watching anime, movies, tv shows and reading. Also, I love keeping track of everything on list websites, if you're interested check them out!
      </div>
      <img
        className="mal"
        onClick={() =>
            window.open("https://myanimelist.net/profile/33opo33", "_blank")
        }
        src={require("../Styles/MAL.png")}
        alt="MAL"
      />
      <img
        className="letterboxd"
        onClick={() =>
            window.open("https://letterboxd.com/33opo/", "_blank")
        }
        src={require("../Styles/letterboxd.png")}
        alt="LetterBoxd"
      />
      <img
        className="goodreads"
        onClick={() =>
            window.open("https://www.goodreads.com/user/show/142076161-owen-post", "_blank")
        }
        src={require("../Styles/goodreads.png")}
        alt="Goodreads"
      />
    </div>
  );
}

export default App;
