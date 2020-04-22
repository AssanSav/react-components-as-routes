import React, { Component } from "react"

export default class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>
                        <input type="text" name="email" placeholder="Email"></input>
                    </p>
                    <p>
                        <input type="text" name="username" placeholder="Username"></input>
                    </p>
                    <p>
                        <input type="text" name="password" placeholder="Password"></input>
                    </p>
                    <p>
                        <input type="text" name="password" placeholder="Confirm Password"></input>
                    </p>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}