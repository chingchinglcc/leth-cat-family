import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Cats from "../components/Cats";
import Footer from "./Footer";

const Home = () => {
  const [didAuth, SetdidAuth] = useState(false);
  const [didFetch, SetdidFetch] = useState(false);

  return (
    <>
      <span>Site Logo Here</span>
      <h1>Lethbridge Cat Family</h1>
      <Menu didAuth={didAuth} />
      <Cats />
      <Footer />
    </>
  );
};

export default Home;
