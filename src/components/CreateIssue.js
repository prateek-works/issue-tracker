import React, { Component } from 'react';
import HomePage from "./HomePage";
import "../css/CreateIssue.css"


export default class createIssue extends Component {
    handleClick = () => {
        const { updateActive, screenNumber } = this.props;
        updateActive(3);
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
            <div id="screen2">
                <form>
                    <p>
                        <h1> Create Issue Page</h1>
                    </p>
                    <p id="projectName-container">
                        title <input type="text" id="projectName"></input>
                    </p>
                    <p id="description-container">
                        description<input type="text" id="description"></input>
                    </p>
                    <p id="author-container">
                        labels<input type="text" id="author"></input>
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
