import React from 'react';
import FormInput from './common/FormInput';
import Button from './common/Button';

function Login() {
  return (
    <div className="Login">
      <h2>Hello, welcome!</h2>
      <FormInput
        label="Username"
        type="text"
        placeholder="Type your username"
        name="username"
      ></FormInput>
      <FormInput
        label="Password"
        type="password"
        placeholder="Type your password"
        name="password"
      ></FormInput>

      <div className="login-buttons">
        <Button className="login-button">Login</Button>
        <Button className="signup-button">Sign Up</Button>
      </div>
    </div>
  );
}

export default Login;
