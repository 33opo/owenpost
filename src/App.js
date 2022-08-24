import './Styles/App.css';
import React from "react";

function App() {
  window.onload = function () {
    var ImageMap = function (map, img) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 1890;
                //1890 for smaller screen
                //
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = img.offsetWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
    imageMap.resize();
    return;
}
const [mouse, setMouse] = React.useState(false);
const [coffee, setCoffee] = React.useState(false);
const [start, setStart] = React.useState(true);

const mouseTrue = () => {
  setMouse(true);
  setCoffee(false);
  setStart(false);
}

const coffeeTrue = () => {
  setCoffee(true);
  setMouse(false);
  setStart(false);
}

  return (
  <div className="back">

    <img id="img_ID" src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#map"/>
    <map id="map_ID" name="map">
        <area 
          alt="mouse" 
          onClick={() => mouseTrue()}
          title="mouse" 
          href="#mouse" 
          coords="1016,50,1041,53,1063,58,1083,73,1083,96,1080,113,1075,140,1070,163,1061,183,1048,195,1031,198,1015,200,991,196,969,191,956,178,953,156,961,128,968,98,976,66,993,53" 
          shape="poly"
        />
        <area 
          alt="coffee"
          onClick={() => coffeeTrue()}
          title="coffee" 
          href="#coffee" 
          coords="1544,159,1577,164,1604,172,1627,187,1644,202,1656,224,1657,249,1651,274,1641,292,1627,309,1606,319,1584,327,1559,332,1527,331,1504,326,1480,319,1457,304,1437,279,1429,249,1435,219,1450,195,1475,175,1504,162" 
          shape="poly"
        />
      </map>
      {start && (
        <div>
        <div className="Name">
        Owen Post
        </div>
        <div className="Text">
          Welcome to my desk! Feel free to look around as its a little messy around here.
        </div>
        </div>
      )}

      {coffee && (
        <div className="Text">
          Coffee
        </div>
      )}

      {mouse && (
        <div>
        <div className="Notable">
          Notable
          <div> 
          This application that allows a user to upload a youtube video or pdf and take notes.
          Users can also make presentations and use many more features as shown in the video!
          </div>
        </div>
        <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/NVWfohvp_Lw`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
      </div>
      )}

  </div>
  );
}

/*
  <div className="Name">
  Owen Post
  </div>
  <div className="Text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
  </div>
*/

export default App;
