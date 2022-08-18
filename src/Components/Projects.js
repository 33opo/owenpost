import './Styles/App.css';
import React from "react";

function App() {
const project = {
        title: String,
        date: String,
        description: String,
        link: String,
        media: String
      }
  const [projectList, setProjectList] = React.useState<project>([]);
  
  return (
    <div>
        Projects
    </div>
  );
}

export default App;