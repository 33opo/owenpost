import "../Styles/App.css";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div className="Notable-Name">Notable</div>
      <div className="Notable">
        This application allows a user to upload a youtube video or pdf and take
        notes. Users can also make presentations and use many more features as
        shown in the video!
      </div>
      <div className="Notable-Icon1">
        <FontAwesomeIcon
          icon={faBookOpen}
          onClick={() =>
            window.open(
              "https://stormy-plateau-24106.herokuapp.com/",
              "_blank"
            )
          }
        />
      </div>
      <div className="Notable-Icon2">
        <FontAwesomeIcon
          icon={faGithub}
          onClick={() =>
            window.open("https://github.com/33opo/notable", "_blank")
          }
        />
      </div>

      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/NVWfohvp_Lw`}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}

export default App;
