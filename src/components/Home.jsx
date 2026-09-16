import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import TravelPartner from "./TravelPartner";
import ReadyButton from "./ReadyButton";
import HeroImage from "./HeroImage"
import OurServices from "./OurServices";
import ServiceCards from "./ServiceCards";

function Home() {
  return (
    <>
    
    <HeroImage />
    <TravelPartner />
    <ReadyButton />
    </>
  );
}

export default Home;