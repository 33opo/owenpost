import './Styles/App.css';
import React from "react";
//import Projects from "./Components/projects.json"

//width="6130" height="3125"
//<img className="back" src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#workmap" width="100%" height="100%"/> 

//<img src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#workmap"/>
// <map name="workmap">
//  <area onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} target="_top" alt="Coffee" title="Coffee" href="coffee.html" coords="6200,950,350" shape="circle"/>
//  </map>
//
//
function App() {

  const [isShown, setIsShown] = React.useState(false);

  window.onload = function () {
    var ImageMap = function (map, img) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 1820;
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

  return (
  <div className="back">

    <img id="img_ID" src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#map"/>
    <map id="map_ID" name="map">
        <area
          alt="headphones"
          title="headphones"
          href="#headhphones"
          coords="120,364,200"
          shape="circle"
        />
        <area
          alt="peripherals"
          title="peripherals"
          href="#peripherals"
          coords="260,314,737,478"
          shape="rect"
        />
        <area
          alt="stationery"
          title="stationery"
          href="#stationery"
          coords="526,296,735,296,729,16,563,16,563,108,524,108"
          shape="poly"
        />
      </map>
      <div className="popup" id="headhphones">
        An awesome pair of headphones!
      </div>
      <div className="popup" id="peripherals">
        These are the peripherals: the keyboard and the mouse.
      </div>
      <div className="popup" id="stationery">
        This is my stationery: a notepad and a pen.
      </div>


  </div>
  );
}

/*
    <img src={require('./Styles/Desk.jpg')} alt="Workplace" usemap="#workmap"/>
      <map name="workmap">
        <area
          alt="headphones"
          title="headphones"
          href="#headhphones"
          coords="120,364,200"
          shape="circle"
        />
        <area
          alt="peripherals"
          title="peripherals"
          href="#peripherals"
          coords="260,314,737,478"
          shape="rect"
        />
        <area
          alt="stationery"
          title="stationery"
          href="#stationery"
          coords="526,296,735,296,729,16,563,16,563,108,524,108"
          shape="poly"
        />
      </map>
      <div className="popup" id="headhphones">
        An awesome pair of headphones!
      </div>
      <div className="popup" id="peripherals">
        These are the peripherals: the keyboard and the mouse.
      </div>
      <div className="popup" id="stationery">
        This is my stationery: a notepad and a pen.
      </div>
*/



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
