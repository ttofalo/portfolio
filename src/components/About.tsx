import "./styles/About.css";
import { useLang } from "../context/LanguageContext";

const About = () => {
  const { lang, t } = useLang();
  return (
    <div className="about-section" id="about">
      <div className="about-me" key={lang}>
        <h3 className="title">"{t.about.title}"</h3>
        <div className="quote-content">
          <p className="para quote">
            {t.about.description}
          </p>
          <p className="para">
            {t.about.description2}
          </p>
          <p className="para">
            {t.about.description3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
