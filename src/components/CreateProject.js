import React, { Component } from 'react';
import HomePage from "./HomePage";
import "../css/CreateProject.css"


export default class CreateProject extends Component {
    handleClick = () => {
        const { updateActive, screenNumber } = this.props;
        updateActive(0);
    };
    handleSubmit = () => {
        const { updateActive, screenNumber } = this.props;
        updateActive(7);
    };

    componentDidMount() {
        var clickButton = document.getElementById("go-back");
        clickButton.onclick = this.handleClick;
        var submitButton = document.getElementById("submit-button");
        submitButton.onclick = this.handleSubmit;
    }
    render() {
        return (
            <div id="screen">
                <form>
                    <p>
                        <h1> Create Project Page</h1>
                    </p>
                    <p id="projectName-container">
                        name <input type="text" id="projectName"></input>
                    </p>
                    <p id="description-container">
                        description<input type="text" id="description"></input>
                    </p>
                    <p id="author-container">
                        author<input type="text" id="author"></input>
                    </p>
                    <input type="Submit" value="Submit" id="submit-button"></input>
                    <p>
                        <button id="go-back">Go back</button>
                    </p>
                </form>
            </div>
        );
    }
}
