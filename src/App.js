import "./Styles/App.css";
import React from "react";
import Notable from "./Components/Notable";
import Database from "./Components/Database";
import AboutMe from "./Components/AboutMe";
import WhereToFindMe from "./Components/WhereToFindMe";
import WorkExperience from "./Components/WorkExperience";
import WhereImAt from "./Components/WhereImAt";
import Interests from "./Components/Interests";
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
          onClick={() => {
            allFalse();
            setMouse(true);
          }}
          title="Notable"
          href="#mouse"
          coords="1016,50,1041,53,1063,58,1083,73,1083,96,1080,113,1075,140,1070,163,1061,183,1048,195,1031,198,1015,200,991,196,969,191,956,178,953,156,961,128,968,98,976,66,993,53"
          shape="poly"
        />
        <area
          alt="coffee"
          onClick={() => {
            allFalse();
            setCoffee(true);
          }}
          title="coffee"
          href="#coffee"
          coords="1544,159,1577,164,1604,172,1627,187,1644,202,1656,224,1657,249,1651,274,1641,292,1627,309,1606,319,1584,327,1559,332,1527,331,1504,326,1480,319,1457,304,1437,279,1429,249,1435,219,1450,195,1475,175,1504,162"
          shape="poly"
        />
        <area
          alt="trackpad"
          onClick={() => {
            allFalse();
            setTrackpad(true);
          }}
          title="Database"
          href="#trackpad"
          coords="402,153,595,111,634,210,437,252"
          shape="poly"
        />
        <area
          alt="glasses"
          onClick={() => {
            allFalse();
            setGlasses(true);
          }}
          title="About Me"
          href="#glasses"
          coords="1380,-1,1418,24,1430,34,1444,36,1461,38,1483,48,1507,58,1534,70,1546,89,1536,105,1517,115,1503,121,1501,133,1481,115,1463,105,1442,99,1422,87,1406,62,1390,66,1367,64,1345,54,1321,44,1292,44,1300,30,1305,6,1323,-1"
          shape="poly"
        />
        <area
          alt="magnifyingGlass"
          onClick={() => {
            allFalse();
            setMagnifyingGlass(true);
          }}
          title="Where to Find Me"
          href="#magnifyingGlass"
          coords="341,666,376,685,390,705,396,729,388,756,372,772,351,784,319,790,299,790,280,788,284,798,278,812,207,930,169,918,252,776,226,743,226,705,250,674,295,660"
          shape="poly"
        />
        <area
          alt="resume"
          onClick={() => {
            allFalse();
            setStart(true);
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/resume-693b0.appspot.com/o/OwenPostResume%20(1).pdf?alt=media&token=b9c448c8-18cb-4f79-b436-491555707b80",
              "_blank"
            );
          }}
          title="Resume"
          href=""
          coords="1887,808,1874,794,1763,660,1491,785,1627,956,1884,960"
          shape="poly"
        />
        <area
          alt="work"
          onClick={() => {
            allFalse();
            setWork(true);
          }}
          title="Work Experience"
          href="#workExperience"
          coords="151,504,1,601,1,851,35,883,230,754,222,721,230,693,244,680,258,670,272,664,291,658,307,658,323,658"
          shape="poly"
        />
        <area
          alt="watch"
          onClick={() => {
            allFalse();
            setWatch(true);
          }}
          title="Where im at Right Now"
          href="#watch"
          coords="106,320,67,336,74,346,76,354,76,369,84,391,98,405,108,411,120,419,130,425,138,433,161,427,175,419,165,401,169,387,173,366,163,350,130,342"
          shape="poly"
        />
        <area
          alt="tablet"
          title="Tablet"
          href="#tablet"
          coords="481,959,518,774,526,760,820,788,828,799,804,959"
          shape="poly"
        />
        <area
          alt="phone"
          title="Phone"
          href="#phone"
          coords="1887,379,1848,314,1724,355,1832,537,1887,519"
          shape="poly"
        />
        <area
          alt="pencilTopRight"
          title="Contact Me"
          href="#pencil"
          coords="1889,57,1738,75,1720,81,1741,89,1889,73"
          shape="poly"
        />
        <area
          alt="pencilBelowTopRight"
          title="Contact Me"
          href="#pencil"
          coords="1887,115,1714,168,1702,178,1722,182,1889,133"
          shape="poly"
        />
        <area
          alt="pencilBottomLeft"
          title="Contact Me"
          href="#pencil"
          coords="3,503,185,526,203,536,185,542,-1,518"
          shape="poly"
        />
        <area
          alt="earbuds"
          onClick={() => {
            allFalse();
            setEarbuds(true);
          }}
          title="My Interests"
          href="#earbuds"
          coords="1342,717,1353,717,1362,725,1362,740,1357,755,1350,772,1340,782,1330,790,1315,799,1300,807,1290,819,1290,835,1303,842,1318,844,1328,837,1333,824,1342,812,1357,802,1377,799,1394,802,1405,805,1420,814,1432,819,1440,829,1447,839,1447,854,1434,862,1417,860,1390,854,1394,830,1422,805,1437,799,1454,795,1474,799,1497,807,1510,820,1510,835,1505,852,1494,862,1484,869,1470,874,1454,875,1437,875,1422,875,1407,875,1390,872,1374,874,1353,877,1337,892,1320,902,1302,919,1290,941,1290,956,1394,959,1400,946,1397,912,1338,872,1315,864,1295,862,1277,865,1257,875,1237,894,1237,919,1257,939,1275,946,1407,921,1424,919,1447,919,1469,932,1490,946,1519,954,1546,949,1561,937,1567,926,1561,909,1547,892,1532,885,1338,732,1360,751,1377,802,1374,817,1360,832,1345,839,1307,814,1313,789,1322,752,1303,739,1288,742,1265,722,1287,708,1317,737"
          shape="poly"
        />
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
      {work && <WorkExperience />}
      {watch && <WhereImAt />}
      {earbuds && <Interests/>}
    </div>
  );
}

export default App;
