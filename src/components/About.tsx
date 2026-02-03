import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">"{config.about.title}"</h3>
        <div className="quote-content">
          <p className="para quote">
            {config.about.description}
          </p>
          <p className="para">
            {config.about.description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
