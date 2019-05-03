import React from "react";

const Form = props => {
  let Login = <p>Please Login first.</p>;

  if (props.didAuth) {
    Login = <p>You might submit a form now!</p>;
  }

  return <>{Login}</>;
};

export default Form;
