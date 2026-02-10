export type Lang = "es" | "en";

const es = {
  loading: "Cargando...",
  loadingScreen: "Cargando",
  welcome: "Bienvenido",
  nav: {
    about: "SOBRE MÍ",
    projects: "PROYECTOS",
    contact: "CONTACTO",
  },
  landing: {
    greeting: "Soy",
    role1: "FrontEnd",
    role2: "Software Developer",
  },
  about: {
    title: "Sobre Mí",
    description:
      "Egresado en Desarrollo de Software, con experiencia en soluciones web y mobile usando React, JavaScript, TypeScript y Java. Actualmente trabajo como Frontend Developer, participando en el desarrollo de sistemas internos, integración de APIs REST y construcción de interfaces mantenibles y de calidad.",
    description2:
      "Tengo experiencia en entornos corporativos y trabajo en equipo bajo metodología Scrum, con foco en la calidad del software y la experiencia de usuario. Actualmente curso la Licenciatura en Ciencia de Datos, aportando una mirada analítica orientada a soluciones basadas en datos.",
  },
  whatIDo: {
    title1: "QUÉ",
    title2: "H",
    title3: "AGO",
    toolsLabel: "Herramientas y habilidades",
    skillTitle: "FRONTEND DEV",
    skillDescription: "Desarrollo de interfaces modernas y escalables",
    skillDetails:
      "Especializado en la creación de aplicaciones web de alto rendimiento, interfaces de usuario intuitivas y sistemas modulares. Enfoque en accesibilidad, rendimiento y buenas prácticas de desarrollo.",
  },
  career: {
    title1: "Mi carrera",
    titleAnd: "y",
    title2: "experiencia",
    experiences: [
      {
        position: "Licenciatura en Ciencia de Datos",
        company: "Universidad del Gran Rosario",
        period: "Dic 2025 - Actualidad",
        description:
          "Formación en análisis de datos, machine learning y técnicas de procesamiento de información.",
      },
      {
        position: "FrontEnd Developer",
        company: "Porta Hnos. S.A.",
        period: "Sept 2025 - Actualidad",
        description:
          "Desarrollo de sistemas internos con ReactJS, MaterialUI y ChakraUI. Integración de APIs REST.",
      },
      {
        position: "Asistente IT",
        company: "Porta Hnos. S.A.",
        period: "Jun 2025 - Sept 2025",
        description:
          "Soporte de hardware, gestión de herramientas como WinCC, SharePoint, WMS y Active Directory.",
      },
      {
        position: "Tecnicatura Desarrollo de Software",
        company: "Instituto Superior Santo Domingo",
        period: "Feb 2023 - Dic 2025",
        description:
          "Formación en programación, bases de datos, redes y desarrollo web/móvil con metodologías ágiles.",
      },
      {
        position: "Analista de Infraestructura",
        company: "Nutefusion Ltd.",
        period: "Sept 2023 - Mar 2024",
        description:
          "Configuración de VPNs, mantenimiento de hardware y soporte remoto en entornos corporativos.",
      },
    ],
  },
  work: {
    title: "Mis",
    titleHighlight: "Proyectos",
    toolsLabel: "Herramientas y características",
    visit: "Visitar",
    ctaTitle: "¿Queres ver mas proyectos?",
    ctaDescription: "Explora todos mis proyectos y creaciones",
    ctaButton: "Ver todos los trabajos →",
    projects: [
      {
        description:
          "Aplicación web moderna para gimnasio, con gestión de membresías, rutinas de entrenamiento y seguimiento de progreso.",
      },
      {
        description:
          "Landing page moderna y responsiva para el complejo turístico 'Cabaña El Amanecer', optimizada para conversión.",
      },
      {
        description:
          "Aplicación interactiva para la práctica y simulación de exámenes náuticos, facilitando el aprendizaje de los estudiantes.",
      },
      {
        description:
          "Landing page premium para desarrolladora inmobiliaria, con enfoque en diseño moderno y experiencia de usuario fluida.",
      },
      {
        description:
          "Plataforma IoT full-stack para el monitoreo y control remoto de boyeros eléctricos. Integra dispositivos físicos con un backend robusto y un panel web en tiempo real, permitiendo gestión centralizada, automatización de estados, registro de eventos y visualización de métricas. Diseñado con foco en escalabilidad, confiabilidad y despliegue productivo sobre VPS con CI/CD.",
      },
    ],
  },
  contact: {
    email: "Correo",
    location: "Ubicación",
    social: "Redes",
    footer: "Diseñado y Desarrollado",
    footerBy: "por",
  },
  cta: {
    button: "Contactame →",
  },
  tech: {
    title: "Tecnologías",
  },
  projectsPage: {
    back: "← Volver al Inicio",
    title: "Todos mis",
    titleHighlight: "proyectos",
    subtitle: "Una colección de todos mis proyectos y creaciones",
    visit: "Visitar",
  },
  developer: {
    title: "Desarrollador Full-Stack",
    description:
      "Desarrollador Full-Stack apasionado por crear aplicaciones web modernas, sistemas inteligentes y soluciones digitales innovadoras.",
  },
  cv: "CURRICULUM",
};

const en: typeof es = {
  loading: "Loading...",
  loadingScreen: "Loading",
  welcome: "Welcome",
  nav: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    contact: "CONTACT",
  },
  landing: {
    greeting: "I'm",
    role1: "FrontEnd",
    role2: "Software Developer",
  },
  about: {
    title: "About Me",
    description:
      "Software Development graduate with experience in web and mobile solutions using React, JavaScript, TypeScript, and Java. Currently working as a Frontend Developer, building internal systems, integrating REST APIs, and creating maintainable, high-quality interfaces.",
    description2:
      "Experienced in corporate environments and teamwork following Scrum methodology, with a focus on software quality and user experience. Currently pursuing a degree in Data Science, bringing an analytical perspective oriented towards data-driven solutions.",
  },
  whatIDo: {
    title1: "WHAT",
    title2: "I",
    title3: "DO",
    toolsLabel: "Tools and skills",
    skillTitle: "FRONTEND DEV",
    skillDescription: "Building modern and scalable interfaces",
    skillDetails:
      "Specialized in creating high-performance web applications, intuitive user interfaces, and modular systems. Focused on accessibility, performance, and development best practices.",
  },
  career: {
    title1: "My career",
    titleAnd: "and",
    title2: "experience",
    experiences: [
      {
        position: "Bachelor's in Data Science",
        company: "Universidad del Gran Rosario",
        period: "Dec 2025 - Present",
        description:
          "Training in data analysis, machine learning, and information processing techniques.",
      },
      {
        position: "FrontEnd Developer",
        company: "Porta Hnos. S.A.",
        period: "Sept 2025 - Present",
        description:
          "Development of internal systems with ReactJS, MaterialUI, and ChakraUI. REST API integration.",
      },
      {
        position: "IT Assistant",
        company: "Porta Hnos. S.A.",
        period: "Jun 2025 - Sept 2025",
        description:
          "Hardware support, management of tools such as WinCC, SharePoint, WMS, and Active Directory.",
      },
      {
        position: "Software Development Degree",
        company: "Instituto Superior Santo Domingo",
        period: "Feb 2023 - Dec 2025",
        description:
          "Training in programming, databases, networking, and web/mobile development with agile methodologies.",
      },
      {
        position: "Infrastructure Analyst",
        company: "Nutefusion Ltd.",
        period: "Sept 2023 - Mar 2024",
        description:
          "VPN configuration, hardware maintenance, and remote support in corporate environments.",
      },
    ],
  },
  work: {
    title: "My",
    titleHighlight: "Projects",
    toolsLabel: "Stack and Tools",
    visit: "Visit",
    ctaTitle: "Want to see more projects?",
    ctaDescription: "Explore all my projects and creations",
    ctaButton: "See all works →",
    projects: [
      {
        description:
          "Modern web application for a gym, featuring membership management, workout routines, and progress tracking.",
      },
      {
        description:
          "Modern and responsive landing page for the 'Cabaña El Amanecer' tourist resort, optimized for conversion.",
      },
      {
        description:
          "Interactive application for practicing and simulating nautical exams, facilitating student learning.",
      },
      {
        description:
          "Premium landing page for a real estate developer, focused on modern design and smooth user experience.",
      },
      {
        description:
          "Full-stack IoT platform for remote monitoring and control of electric fence chargers. Integrates physical devices with a robust backend and a real-time web dashboard, enabling centralized management, state automation, event logging, and metrics visualization. Designed with a focus on scalability, reliability, and production deployment on VPS with CI/CD.",
      },
    ],
  },
  contact: {
    email: "Email",
    location: "Location",
    social: "Social",
    footer: "Designed and Developed",
    footerBy: "by",
  },
  cta: {
    button: "Contact me →",
  },
  tech: {
    title: "Technologies",
  },
  projectsPage: {
    back: "← Back to Home",
    title: "All my",
    titleHighlight: "projects",
    subtitle: "A collection of all my projects and creations",
    visit: "Visit",
  },
  developer: {
    title: "Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about building modern web applications, intelligent systems, and innovative digital solutions.",
  },
  cv: "RESUME",
};

export type Translations = typeof es;

export const translations: Record<Lang, Translations> = { es, en };
