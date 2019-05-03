import React from "react";
import Profile from "./Profile";
import Form from "./Form";

const Menu = props => {
  return (
    <>
      <Profile />
      <Form didAuth={props.didAuth} />
    </>
  );
};

export default Menu;
