import React from "react";
import Contact from "../contacts";
import About from "../about";
import InfiniteSkillsSlider from "./skillsSlider";
import ReadyTocollaborate from "../common/rotatingWheel";
import ProjectsSection from "../projects";
import Footer from "../footer";
import Intro from "./intro";
import RotatingCircle from "../common/rotatingWheel";

const HomeContainer = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Intro />
      <InfiniteSkillsSlider />
      <About />
      <RotatingCircle />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeContainer;
