import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainter } from "./homepage.styles"


const HomePage = () => {
  return (
    <HomePageContainter>
      <Directory />
    </HomePageContainter>
  );
};

export default HomePage;
