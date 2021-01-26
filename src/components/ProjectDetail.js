import React, { Component } from 'react';
import HomePage from "./HomePage";
import "../css/ProjectDetails.css"


export default class ProjectDetail extends Component {

    handleIssue = () => {
        const { updateActive } = this.props;
        updateActive(1);
    };
    handleClick = () => {
        const { updateActive, screenNumber } = this.props;
        updateActive(0);
    };

    componentDidMount() {
        var createIssue = document.getElementById("createIssue");
        var clickButton = document.getElementById("go-back");
        clickButton.onclick = this.handleClick;
        createIssue.onclick = this.handleIssue;
    }
    render() {
        return (
            <div id="screen3">
                <h1>Project bugs </h1>
                <h3>(Project author - Prateek) </h3>

                <ol>
                    <li>bug1</li>
                    <li>bug2</li>
                    <li>bug3</li>
                    <li>bug4</li>
                    <li>bug5</li>
                    <li>bug6</li>
                    <li>bug7</li>
                    <li>bug8</li>
                    <li>bug9</li>
                    <li>bug10</li>
                    <li>bug11</li>
                    <li>bug12</li>
                </ol>
                <button id="createIssue">Create a new issue</button>
                <button id="go-back">Go back</button>

            </div>
        );
    }
}
