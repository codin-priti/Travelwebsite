import React from "react";
import Home from "../src/sections/Home";
import OfferService from "./sections/offerservice";
import UpcomingPackages from "./sections/upcomingpackages";
const App: React.FC = () => {
  return (
    <div>
      <Home />
      <OfferService />
      <UpcomingPackages />
       
    </div>
  );
}

export default App;
