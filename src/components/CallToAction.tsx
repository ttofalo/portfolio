import { config } from "../config";
import "./styles/CallToAction.css";
import { useLang } from "../context/LanguageContext";

const CallToAction = () => {
  const { t } = useLang();
  return (
    <div className="cta-section">
      <div className="cta-buttons">

        <a
          href={config.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          {t.cta.button}
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
