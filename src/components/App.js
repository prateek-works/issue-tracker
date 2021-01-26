import React, { Component } from 'react';
import '../css/App.css';
import HomePage from "./HomePage";
import ProjectDetail from "./ProjectDetail";
import CreateProject from "./CreateProject";
import CreateIssue from "./CreateIssue";





class App extends Component {

  state = {
    screenNumber: 0,
  };
  constructor() {
    super();
  }

  updateActive = (screenNum) => {
    this.setState({ screenNumber: screenNum });
  };
  updateProjectName = (projectName) => {
    this.setState({ projectName })
  }

  render() {
    const { screenNumber } = this.state;

    return (
      <div className="App">
        <h1>ISSUE TRACKER</h1>
        <div id="contents-container">

          {screenNumber == 0 && (
            <HomePage
              screenNumber={screenNumber}
              updateActive={this.updateActive}
            />
          )}
          {screenNumber == 1 && (
            <CreateIssue
              screenNumber={screenNumber}
              updateActive={this.updateActive}
            />
          )}
          {screenNumber == 2 && (
            <CreateProject
              screenNumber={screenNumber}
              updateActive={this.updateActive}
            />
          )}
          {screenNumber == 3 && (
            <ProjectDetail
              screenNumber={screenNumber}
              updateActive={this.updateActive}
            />
          )}
        </div>

      </div>
    );
  }
}

export default App;
