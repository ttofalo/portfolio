export type Lang = "es" | "en";

const es = {
  loading: "Cargando...",
  loadingScreen: "Cargando",
  welcome: "Bienvenido",
  emailCopied: "¡Copiado!",
  nav: {
    about: "SOBRE MÍ",
    projects: "PROYECTOS",
    contact: "CONTACTO",
  },
  landing: {
    greeting: "Soy",
    role1: "FullStack",
    role2: "Developer",
  },
  about: {
    title: "Sobre Mí",
    description:
      "Software Engineer egresado en Desarrollo de Software. Me enfoco en el backend que sostiene la confiabilidad de un producto a escala y bajo datos reales: data-quality, fraud detection, KYC e infraestructura de comunicaciones por encima de la feature aislada. Hoy en Silencio Network, una plataforma global de Voice AI con +1M de usuarios que recolecta y valida datos de voz para entrenar modelos de IA, sobre un stack serverless en AWS, con Node.js, Python, React, TypeScript y PostgreSQL.",
    description2:
      "Mi experiencia previa cubre la construcción de sistemas internos desde cero y la administración de infraestructura corporativa como Active Directory, SharePoint, ERP y VPNs. Esa base me da una visión concreta de cómo el software se encuentra con la operación real de una empresa.",
    description3:
      "Cursando la Licenciatura en Ciencia de Datos en la Universidad del Gran Rosario, sumando una mirada analítica al perfil técnico.",
  },
  whatIDo: {
    title1: "QUÉ",
    title2: "H",
    title3: "AGO",
    toolsLabel: "Herramientas y habilidades",
    skillTitle: "SOFTWARE DEVELOPMENT",
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
        position: "Software Engineer",
        company: "Silencio Network",
        period: "Sept 2026 - Actualidad",
        type: "work",
        description:
          "Desarrollo de features end to end para una plataforma global de Voice AI con +1M de usuarios que recolecta y valida datos de voz para entrenar modelos de IA. Participación en el flujo de KYC, reglas de retiro por país, mecanismos de fraud detection y data-quality, y el sistema de Mail Communications sobre AWS SES. Desarrollo de herramientas internas de operación y analytics, localización del producto y decisiones de arquitectura, performance y reliability en un entorno serverless. Stack: AWS, Node.js, Python, React, PostgreSQL.",
      },
      {
        position: "Licenciatura en Ciencia de Datos",
        company: "Universidad del Gran Rosario",
        period: "Dic 2025 - Actualidad",
        type: "education",
        description:
          "Formación en análisis de datos, machine learning y técnicas de procesamiento de información.",
      },
      {
        position: "FrontEnd Developer",
        company: "Porta Hnos. S.A.",
        period: "Sept 2025 - Sept 2026",
        type: "work",
        description:
          "Desarrollo de sistemas internos con ReactJS, MaterialUI y ChakraUI. Integración de APIs REST.",
      },
      {
        position: "Asistente IT",
        company: "Porta Hnos. S.A.",
        period: "Jun 2025 - Sept 2025",
        type: "work",
        description:
          "Soporte de hardware, gestión de herramientas como WinCC, SharePoint, WMS y Active Directory.",
      },
      {
        position: "Tecnicatura Desarrollo de Software",
        company: "Instituto Superior Santo Domingo",
        period: "Feb 2023 - Dic 2025",
        type: "education",
        description:
          "Formación en programación, bases de datos, redes y desarrollo web/móvil con metodologías ágiles.",
      },
      {
        position: "Analista de Infraestructura",
        company: "Nutefusion Ltd.",
        period: "Sept 2023 - Mar 2024",
        type: "work",
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
    seeMore: "Ver más →",
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
          "Ecosistema de software completo para startup de triple impacto que recompensa el reciclaje con descuentos en comercios. Proyecto de tesis. Integra landing page, panel administrativo, panel de negocio adherido y app Android nativa en Java publicada en PlayStore, todo conectado a una misma base de datos MongoDB.",
      },
      {
        description:
          "Landing page premium para desarrolladora inmobiliaria, con enfoque en diseño moderno y experiencia de usuario fluida.",
      },
      {
        description:
          "Sistema IoT basado en un ESP-32 que se conecta vía WiFi a un backend desplegado en un VPS mediante WebSocket. Según el estado recibido, el microcontrolador activa o desactiva un relé que controla la corriente del boyero eléctrico. Para el usuario, todo se gestiona desde un frontend simple e intuitivo donde puede encender o apagar el boyero con un solo clic.",
      },
      {
        description:
          "Aplicación interactiva para la práctica y simulación de exámenes náuticos, facilitando el aprendizaje de los estudiantes.",
      },
      {
        description:
          "Sistema de navegación indoor asistida por voz, pensado para personas con discapacidad visual. Posiciona al usuario sin GPS fusionando acelerómetro, giroscopio y brújula del teléfono (dead reckoning con detección de pasos), y se recalibra leyendo códigos QR distribuidos en el edificio. Incluye una PWA con guiado por voz y rutas calculadas con A*, un editor web de planos vectoriales y una API REST con base de datos en la nube.",
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
  emailCopied: "Copied!",
  nav: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    contact: "CONTACT",
  },
  landing: {
    greeting: "I'm",
    role1: "FullStack",
    role2: "Developer",
  },
  about: {
    title: "About Me",
    description:
      "Software Engineer and Software Development graduate. I focus on the backend that supports product reliability at scale and with real-world data: data quality, fraud detection, KYC, and communications infrastructure beyond the isolated feature. Today at Silencio Network, a global Voice AI platform with 1M+ users that collects and validates voice data to train AI models, built on a serverless AWS stack with Node.js, Python, React, TypeScript, and PostgreSQL.",
    description2:
      "My previous experience includes building internal systems from scratch and managing corporate infrastructure such as Active Directory, SharePoint, ERP systems, and VPNs. This background gives me a practical view of how software meets real business operations.",
    description3:
      "Currently pursuing a Bachelor's degree in Data Science at Universidad del Gran Rosario, adding an analytical perspective to my technical profile.",
  },
  whatIDo: {
    title1: "WHAT",
    title2: "I",
    title3: "DO",
    toolsLabel: "Tools and skills",
    skillTitle: "SOFTWARE DEVELOPMENT",
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
        position: "Software Engineer",
        company: "Silencio Network",
        period: "Sept 2026 - Present",
        type: "work",
        description:
          "End-to-end feature development for a global Voice AI platform with 1M+ users that collects and validates voice data to train AI models. Contributing to KYC flows, country-specific withdrawal rules, fraud detection and data quality mechanisms, and the Mail Communications system built on AWS SES. Building internal operations and analytics tools, localizing the product, and contributing to architecture, performance, and reliability decisions in a serverless environment. Stack: AWS, Node.js, Python, React, PostgreSQL.",
      },
      {
        position: "Bachelor's in Data Science",
        company: "Universidad del Gran Rosario",
        period: "Dec 2025 - Present",
        type: "education",
        description:
          "Training in data analysis, machine learning, and information processing techniques.",
      },
      {
        position: "FrontEnd Developer",
        company: "Porta Hnos. S.A.",
        period: "Sept 2025 - Sept 2026",
        type: "work",
        description:
          "Development of internal systems with ReactJS, MaterialUI, and ChakraUI. REST API integration.",
      },
      {
        position: "IT Assistant",
        company: "Porta Hnos. S.A.",
        period: "Jun 2025 - Sept 2025",
        type: "work",
        description:
          "Hardware support, management of tools such as WinCC, SharePoint, WMS, and Active Directory.",
      },
      {
        position: "Software Development Degree",
        company: "Instituto Superior Santo Domingo",
        period: "Feb 2023 - Dec 2025",
        type: "education",
        description:
          "Training in programming, databases, networking, and web/mobile development with agile methodologies.",
      },
      {
        position: "Infrastructure Analyst",
        company: "Nutefusion Ltd.",
        period: "Sept 2023 - Mar 2024",
        type: "work",
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
    seeMore: "See more →",
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
          "Complete software ecosystem for a triple-impact startup that rewards recycling with discounts at partner stores. Thesis project. Integrates a landing page, admin panel, partner business panel, and a native Android app built in Java published on PlayStore, all connected to a single MongoDB database.",
      },
      {
        description:
          "Premium landing page for a real estate developer, focused on modern design and smooth user experience.",
      },
      {
        description:
          "IoT system built around an ESP-32 that connects via WiFi to a backend deployed on a VPS through WebSocket. Based on the received state, the microcontroller toggles a relay that controls the electric fence charger's power. For the end user, everything is managed from a simple and intuitive frontend where they can turn the charger on or off with a single click.",
      },
      {
        description:
          "Interactive application for practicing and simulating nautical exams, facilitating student learning.",
      },
      {
        description:
          "Voice-guided indoor navigation system designed for people with visual impairment. It locates the user without GPS by fusing the phone's accelerometer, gyroscope and compass (dead reckoning with step detection), and recalibrates by scanning QR codes placed across the building. Includes a PWA with voice guidance and A* routing, a web-based vector map editor, and a REST API with a cloud database.",
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
