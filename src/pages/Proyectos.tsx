import { useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "./Proyectos.css";
import { useLang } from "../context/LanguageContext";

const Proyectos = () => {
  const { t } = useLang();

  // Unlock scroll when entering this page directly (body has overflow:hidden by default)
  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);
  return (
    <div className="proyectos-page">
      <div className="proyectos-header">
        <Link
          to="/"
          state={{ fromProyectos: true }}
          className="back-button"
          data-cursor="disable"
        >
          {t.projectsPage.back}
        </Link>
        <h1>
          {t.projectsPage.title} <span>{t.projectsPage.titleHighlight}</span>
        </h1>
        <p>{t.projectsPage.subtitle}</p>
      </div>

      <div className="proyectos-grid">
        {config.projects.map((project, index) => (
          <div className="proyectos-card" key={project.id} data-cursor="disable">
            <div className="proyectos-card-number">0{index + 1}</div>
            <div className="proyectos-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="proyectos-card-info">
              <h3>{project.title}</h3>
              <p className="proyectos-card-category">{project.category}</p>
              <p className="proyectos-card-description">
                {t.work.projects[index]?.description ?? project.description}
              </p>
              <p className="proyectos-card-tech">{project.technologies}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-link"
                  data-cursor="disable"
                >
                  {t.projectsPage.visit} <span className="visit-icon">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
