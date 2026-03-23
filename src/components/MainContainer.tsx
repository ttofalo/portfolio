import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";
import { useLang } from "../context/LanguageContext";
import { useLocation } from "react-router-dom";

const MainContainer = ({ children }: PropsWithChildren) => {
  const { lang } = useLang();
  const location = useLocation();
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    if (!location.state?.fromProyectos) return;
    // Wait for GSAP ScrollTrigger to finish setting up before scrolling
    const timer = setTimeout(() => {
      const workSection = document.querySelector("#work") as HTMLElement;
      if (workSection) {
        window.scrollTo(0, workSection.offsetTop);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // Re-run text split animations when language changes
  useEffect(() => {
    const timer = setTimeout(() => setSplitText(), 50);
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && !isMobile && children}
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStackNew />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
