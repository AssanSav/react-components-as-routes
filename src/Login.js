import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" />
            </form>
        );
    }
}