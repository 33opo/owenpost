import "./Styles/App.css";
import React from "react";
import Notable from "./Components/Notable";
import Database from "./Components/Database";
import AboutMe from "./Components/AboutMe";
import WhereToFindMe from "./Components/WhereToFindMe";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  window.onload = function () {
    var ImageMap = function (map, img) {
        var n,
          areas = map.getElementsByTagName("area"),
          len = areas.length,
          coords = [],
          previousWidth = 1888;
        //1890 for smaller screen
        //1920 - 30 = 2048 - 160
        //
        //2048 large 1920 small = 128
        for (n = 0; n < len; n++) {
          coords[n] = areas[n].coords.split(",");
        }
        this.resize = function () {
          var n,
            m,
            clen,
            x = img.offsetWidth / previousWidth;
          for (n = 0; n < len; n++) {
            clen = coords[n].length;
            for (m = 0; m < clen; m++) {
              coords[n][m] *= x;
            }
            areas[n].coords = coords[n].join(",");
          }
          previousWidth = document.body.clientWidth;
          return true;
        };
        window.onresize = this.resize;
      },
      imageMap = new ImageMap(
        document.getElementById("map_ID"),
        document.getElementById("img_ID")
      );
    imageMap.resize();
    return;
  };
  const [mouse, setMouse] = React.useState(false);
  const [coffee, setCoffee] = React.useState(false);
  const [trackpad, setTrackpad] = React.useState(false);
  const [glasses, setGlasses] = React.useState(false);
  const [magnifyingGlass, setMagnifyingGlass] = React.useState(false);
  const [start, setStart] = React.useState(true);

  //console.log(window.innerWidth);

  const mouseTrue = () => {
    setMouse(true);
    setCoffee(false);
    setStart(false);
    setTrackpad(false);
    setGlasses(false);
    setMagnifyingGlass(false);
  };

  const coffeeTrue = () => {
    setCoffee(true);
    setMouse(false);
    setStart(false);
    setTrackpad(false);
    setGlasses(false);
    setMagnifyingGlass(false);
  };

  const trackpadTrue = () => {
    setTrackpad(true);
    setCoffee(false);
    setMouse(false);
    setStart(false);
    setGlasses(false);
    setMagnifyingGlass(false);
  };

  const glassesTrue = () => {
    setGlasses(true);
    setTrackpad(false);
    setCoffee(false);
    setMouse(false);
    setStart(false);
    setMagnifyingGlass(false);
  };

  const magnifyingGlassTrue = () => {
    setMagnifyingGlass(true);
    setGlasses(false);
    setTrackpad(false);
    setCoffee(false);
    setMouse(false);
    setStart(false);
  };

  return (
    <div className="back">
      <img
        id="img_ID"
        src={require("./Styles/sizedDesk.jpg")}
        alt="Workplace"
        usemap="#map"
      />
      <map id="map_ID" name="map">
        <area
          alt="mouse"
          onClick={() => mouseTrue()}
          title="Notable"
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
        <area
          alt="trackpad"
          onClick={() => trackpadTrue()}
          title="Database"
          href="#trackpad"
          coords="402,153,595,111,634,210,437,252"
          shape="poly"
        ></area>
        <area
          alt="glasses"
          onClick={() => glassesTrue()}
          title="About Me"
          href="#glasses"
          coords="1380,-1,1418,24,1430,34,1444,36,1461,38,1483,48,1507,58,1534,70,1546,89,1536,105,1517,115,1503,121,1501,133,1481,115,1463,105,1442,99,1422,87,1406,62,1390,66,1367,64,1345,54,1321,44,1292,44,1300,30,1305,6,1323,-1"
          shape="poly"
        ></area>
        <area
          alt="magnifyingGlass"
          onClick={() => magnifyingGlassTrue()}
          title="WhereToFindMe"
          href="#magnifyingGlass"
          coords="341,666,376,685,390,705,396,729,388,756,372,772,351,784,319,790,299,790,280,788,284,798,278,812,207,930,169,918,252,776,226,743,226,705,250,674,295,660"
          shape="poly"
        ></area>
        <area alt="resume" title="Resume" href="#Resume" coords="1887,808,1874,794,1763,660,1491,785,1627,956,1884,960" shape="poly"></area>
      </map>
      {start && (
        <div>
          <div className="Name">Owen Post</div>
          <div className="Text">
            Welcome to my desk! Feel free to look around as its a little messy
            around here.
          </div>
        </div>
      )}

      {coffee && (
        <div className="Text">
          Coffee
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      )}

      {mouse && <Notable />}
      {trackpad && <Database />}
      {glasses && <AboutMe />}
      {magnifyingGlass && <WhereToFindMe />}
    </div>
  );
}

export default App;
