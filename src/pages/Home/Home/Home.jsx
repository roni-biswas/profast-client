import React from "react";
import Banner from "../Banner/Banner";
import Services from "../services/Services";
import ClientSlider from "../ClientSlider/ClientSlider";
import Benefits from "../Benefits/Benefits";
import BeMerchant from "../BeMerchant/BeMerchant";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientSlider />
      <Benefits />
      <BeMerchant />
    </div>
  );
};

export default Home;
