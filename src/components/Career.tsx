import "./styles/Career.css";
import { useLang } from "../context/LanguageContext";

const Career = () => {
  const { t } = useLang();
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {t.career.title1} <span>{t.career.titleAnd}</span>
          <br /> {t.career.title2}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {t.career.experiences.map((exp, index) => (
            <div key={index} className={`career-info-box ${index === 0 || index === 3 ? 'career-education' : 'career-work'}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
