import React from "react";
import Contact from "../contacts";
import About from "../about";
import InfiniteSkillsSlider from "./skillsSlider";
import ProjectsSection from "../projects";
import Footer from "../footer";
import Intro from "./intro";
import RotatingCircle from "../common/rotatingWheel";

const HomeContainer = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
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
