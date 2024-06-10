import "../Styles/App.css";
import "../Styles/Me.css";
import React from "react";
import {PicIcon} from "../Helpers/PicIcon";

function Interests() {
  return (
    <div className="interests">
      <div className="name">Personal Interests</div>
      <div className="description">
        I like watching anime, movies, tv shows and reading. Also, I love keeping track of everything on list websites, if you're interested check them out!
      </div>
      <PicIcon className="letterboxd" url="https://letterboxd.com/33opo/"/>
      <PicIcon className="MAL" url="https://myanimelist.net/profile/33opo33"/>
      <PicIcon className="goodreads" url="https://www.goodreads.com/user/show/142076161-owen-post"/>
    </div>
  );
}

export default Interests;
