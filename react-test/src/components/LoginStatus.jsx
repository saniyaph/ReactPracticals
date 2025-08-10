import React from "react";

const LoginStatus = ({isLoggedIn}) => {
  return isLoggedIn? <h1>Welcome back, User</h1>:<h1>Login Please</h1>
};

export default LoginStatus;
