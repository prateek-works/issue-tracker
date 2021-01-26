import React, { Component } from 'react';
import "../css/HomePage.css"

class HomePage extends Component {

  handleClick = () => {
    const { updateActive } = this.props;
    updateActive(2);
  };

  handleProjectPage = () => {
    const { updateActive } = this.props;
    updateActive(3);
  };

  constructor() {
    super();
  }


  componentDidMount() {
    var createButton = document.getElementById("createTask");
    var projectpage = document.getElementById("project1");
    createButton.onclick = this.handleClick;
    projectpage.onclick = this.handleProjectPage;
  }


  render() {
    const { username, projectName } = this.props;
    return (
      <div className="HomePage">

        <div>
          <h1>List of Projects</h1>
          <ul>
            <li id="project1">Project 1</li>
            <li id="project2">Project 2</li>
            <li id="project2">Project 3</li>
            <li id="project2">Project 4</li>
            <li id="project2">Project 5</li>
            <li id="project2">Project 6</li>
            <li id="project2">Project 7</li>
            <li id="project2">Project 8</li>
            <li id="project2">Project 9</li>
            <li id="project2">Project 10</li>



          </ul>
          <div id="buttons-container">
            <button id="createTask">Create a new project</button>
          </div>


        </div>
      </div>
    );
  }
}

export default HomePage;
