import React from "react";

const ConditionalRendering = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome...</h1>;
  } else {
    return <h1>Error..</h1>;
  }
  // return isLoggedIn ? <h1>welocm...</h1> : <h1>go bakc..</h1>;
};

export default ConditionalRendering;
