import React, { Component } from "react"

export default class Message extends Component {
    render() {
        return (
            <div>
                <p>
                    <textarea></textarea>
                </p>
                <input type="submit" value="Submit"></input>
            </div>
        )
    }
}