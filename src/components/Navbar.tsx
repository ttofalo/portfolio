import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";
import { useLang } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(config.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    // Start paused
    lenis.stop();

    // Handle smooth scroll animation frame
    let rafId: number;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        }
      });
    });

    // Handle resize
    window.addEventListener("resize", () => {
      lenis?.resize();
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  return (
    <>
      <div className="header">
        <button
          onClick={copyToClipboard}
          className="navbar-connect"
          data-cursor="disable"
          aria-label="Copy email to clipboard"
        >
          {config.contact.email}
          {copied && <span className="copied-message">{t.emailCopied}</span>}
        </button>
        <ul>
          <li className="lang-switch-li">
            <button
              className="lang-switch"
              onClick={toggleLang}
              data-cursor="disable"
              aria-label="Switch language"
            >
              <span className={lang === "es" ? "lang-active" : ""}>ES</span>
              <span className={lang === "en" ? "lang-active" : ""}>EN</span>
            </button>
          </li>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text={t.nav.about} />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text={t.nav.projects} />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text={t.nav.contact} />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
