import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Bestseller from "../components/Bestseller";
import BestGaming from "../components/BestGaming";
import SubscribeUs from "../components/SubscribeUs";
import PcCase from "../components/PcCase";
import Earphone from "../components/Earphone";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <div className="positon">
        <Bestseller />
        <BestGaming />
        <SubscribeUs />
        <PcCase />
        <Earphone />
        <About/>
        <Testimonials />
       <Footer/>
      </div>
    </>
  );
};

export default Home;
