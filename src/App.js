import './Styles/App.css';
import React from "react";
//import Projects from "./Components/projects.json"

//width="6130" height="3125"
//<img className="back" src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#workmap" width="100%" height="100%"/> 
function App() {
  return (
<div className="back">
<img src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#workmap"/>
  <div className="Name">
  Owen Post
  </div>
  <div className="Text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  </div>
<map name="workmap">
  <area target="_top" alt="Coffee" title="Coffee" href="coffee.html" coords="6200,950,350" shape="circle"/>
</map>
</div>

    
  );
}
/*
<div className="">
      <img className="back" src={require('./Styles/sizedDesk.jpg')} alt="Workplace" usemap="#workmap" width="100%" height="100%"/>
      <map name="workmap" >
        <area shape="rect" coords="34,44,270,350" alt="Computer" href=""/>
        <area className="Coffee" shape="rect" coords="290,172,333,250" alt="Phone" href="/hi"/>
        <area className="Coffee" shape="circle" coords="1000,1000,500" alt="Coffee" href=""/>
      </map>
    </div>
*/



/*
      <header className="header">
       HEADER
      </header>
      <header className="header"></header>
      <div className="sidebar"></div>
      <div className="main">
      {
        Projects.map( project => {
          return(
            <div>
              {project.title}
            </div>
          )
        })
      }
      </div>
      <div className="sidebar"></div>
      <div className="bottom"></div>
      <div className="bottom">BOTTOM TEXT</div>
      <div className="bottom"></div>
*/

export default App;
