import "./Styles/App.css";
import "./Styles/Me.css";
import React from "react";
import Notable from "./Components/Notable";
import Database from "./Components/Database";
import AboutMe from "./Components/AboutMe";
import WhereToFindMe from "./Components/WhereToFindMe";
import WorkExperience from "./Components/WorkExperience";
import WhereImAt from "./Components/WhereImAt";
import Interests from "./Components/Interests";
import ContactMe from "./Components/ContactMe";
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
  const [work, setWork] = React.useState(false);
  const [watch, setWatch] = React.useState(false);
  const [earbuds, setEarbuds] = React.useState(false);
  const [pencil, setPencil] = React.useState(false);
  const [magnifyingGlass, setMagnifyingGlass] = React.useState(false);
  const [start, setStart] = React.useState(true);

  //console.log(window.innerWidth);
  const allFalse = () => {
    setMouse(false);
    setCoffee(false);
    setStart(false);
    setTrackpad(false);
    setGlasses(false);
    setMagnifyingGlass(false);
    setWork(false);
    setWatch(false);
    setEarbuds(false);
    setPencil(false);
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
          onMouseEnter={() => {
            document.getElementById("notableDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("notableDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setMouse(true);
          }}
          coords="1016,50,1041,53,1063,58,1083,73,1083,96,1080,113,1075,140,1070,163,1061,183,1048,195,1031,198,1015,200,991,196,969,191,956,178,953,156,961,128,968,98,976,66,993,53"
          shape="poly"
        />
        <area
          alt="coffee"
          onMouseEnter={() => {
            document.getElementById("coffeeDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("coffeeDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setCoffee(true);
          }}
          coords="1544,159,1577,164,1604,172,1627,187,1644,202,1656,224,1657,249,1651,274,1641,292,1627,309,1606,319,1584,327,1559,332,1527,331,1504,326,1480,319,1457,304,1437,279,1429,249,1435,219,1450,195,1475,175,1504,162"
          shape="poly"
        />
        <area
          alt="trackpad"
          onMouseEnter={() => {
            document.getElementById("databaseDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("databaseDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setTrackpad(true);
          }}
          coords="402,153,595,111,634,210,437,252"
          shape="poly"
        />
        <area
          alt="glasses"
          onMouseEnter={() => {
            document.getElementById("meDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("meDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setGlasses(true);
          }}
          coords="1380,-1,1418,24,1430,34,1444,36,1461,38,1483,48,1507,58,1534,70,1546,89,1536,105,1517,115,1503,121,1501,133,1481,115,1463,105,1442,99,1422,87,1406,62,1390,66,1367,64,1345,54,1321,44,1292,44,1300,30,1305,6,1323,-1"
          shape="poly"
        />
        <area
          alt="magnifyingGlass"
          onMouseEnter={() => {
            document.getElementById("find").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("find").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setMagnifyingGlass(true);
          }}
          coords="341,666,376,685,390,705,396,729,388,756,372,772,351,784,319,790,299,790,280,788,284,798,278,812,207,930,169,918,252,776,226,743,226,705,250,674,295,660"
          shape="poly"
        />
        <area
          alt="resume"
          onMouseEnter={() => {
            document.getElementById("resumeDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("resumeDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setStart(true);
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/resume-693b0.appspot.com/o/OwenPostResume%20(1).pdf?alt=media&token=b9c448c8-18cb-4f79-b436-491555707b80",
              "_blank"
            );
          }}
          coords="1887,808,1874,794,1763,660,1491,785,1627,956,1884,960"
          shape="poly"
        />
        <area
          alt="watch"
          onMouseEnter={() => {
            document.getElementById("watchDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("watchDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setWatch(true);
          }}
          coords="106,320,67,336,74,346,76,354,76,369,84,391,98,405,108,411,120,419,130,425,138,433,161,427,175,419,165,401,169,387,173,366,163,350,130,342"
          shape="poly"
        />
        <area
          alt="tablet"
          onMouseEnter={() => {
            document.getElementById("tabletDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("tabletDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setMouse(true);
          }}
          coords="481,959,518,774,526,760,820,788,828,799,804,959"
          shape="poly"
        />
        <area
          alt="phone"
          onMouseEnter={() => {
            document.getElementById("phoneDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("phoneDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setTrackpad(true);
          }}
          coords="1887,379,1848,314,1724,355,1832,537,1887,519"
          shape="poly"
        />
        <area
          alt="pencilTopRight"
          onMouseEnter={() => {
            document.getElementById("pencilDesc2").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("pencilDesc2").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setPencil(true);
          }}
          coords="1889,57,1738,75,1720,81,1741,89,1889,73"
          shape="poly"
        />
        <area
          alt="pencilBelowTopRight"
          onMouseEnter={() => {
            document.getElementById("pencilDesc2").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("pencilDesc2").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setPencil(true);
          }}
          coords="1887,115,1714,168,1702,178,1722,182,1889,133"
          shape="poly"
        />
        <area
          alt="pencilBottomLeft"
          onMouseEnter={() => {
            document.getElementById("pencilDesc1").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("pencilDesc1").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setPencil(true);
          }}
          coords="3,503,185,526,203,536,185,542,-1,518"
          shape="poly"
        />
        <area
          alt="earbuds"
          onMouseEnter={() => {
            document.getElementById("interestsDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("interestsDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setEarbuds(true);
          }}
          coords="1265,722,1280,716,1297,721,1312,732,1328,747,1337,741,1342,721,1353,721,1364,727,1364,744,1357,759,1353,769,1387,796,1427,801,1474,789,1509,816,1514,846,1557,901,1571,924,1566,938,1554,948,1540,956,1287,958,1277,946,1245,934,1233,914,1247,881,1287,863,1285,828,1298,804,1320,767,1300,741,1287,741"
          shape="poly"
        />
        <area
          alt="work"
          onMouseEnter={() => {
            document.getElementById("workDesc").className = "popup";
          }}
          onMouseLeave={() => {
            document.getElementById("workDesc").className = "hide";
          }}
          onClick={() => {
            allFalse();
            setWork(true);
          }}
          coords="151,504,1,601,1,851,35,883,230,754,222,721,230,693,244,680,258,670,272,664,291,658,307,658,323,658"
          shape="poly"
        />
      </map>
      {start && (
        <div>
          <div className="InterestsName">Owen Post</div>
          <div className="InterestsDescription">
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
      {work && <WorkExperience />}
      {watch && <WhereImAt />}
      {earbuds && <Interests/>}
      {pencil && <ContactMe/>}
      <div>
        <div className="hide" style={{left:"2%", top:"84%"}} id="workDesc">
          Work Experience
        </div>
        <div className="hide" style={{left:"41%", top:"84%"}} id="tabletDesc">
          Project TBA
        </div>
        <div className="hide" style={{left:"18%", top:"68%"}} id="find">
          Where to Find Me
        </div>
        <div className="hide" style={{left:"1%", top:"47%"}} id="pencilDesc1">
          Contact Me
        </div>
        <div className="hide" style={{left:"5%", top:"30%"}} id="watchDesc">
          Where I'm At
        </div>
        <div className="hide" style={{left:"28%", top:"8%"}} id="databaseDesc">
          Database System
        </div>
        <div className="hide" style={{left:"56%", top:"4%"}} id="notableDesc">
          Notable
        </div>
        <div className="hide" style={{left:"69%", top:"7%"}} id="meDesc">
          About Me
        </div>
        <div className="hide" style={{left:"82%", top:"13%"}} id="coffeeDesc">
          Coffee
        </div>
        <div className="hide" style={{left:"89%", top:"9.5%"}} id="pencilDesc2">
          Contact Me
        </div>
        <div className="hide" style={{left:"87%", top:"44%"}} id="phoneDesc">
          Project TBA
        </div>
        <div className="hide" style={{left:"82%", top:"70%"}} id="resumeDesc">
          Resume
        </div>
        <div className="hide" style={{left:"62%", top:"85%"}} id="interestsDesc">
          Interests
        </div>
      </div>
    </div>
  );
}

export default App;
