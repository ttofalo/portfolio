import cabanaImg from "./assets/cabaña.png";
import examenImg from "./assets/examen.png";
import boyerosImg from "./assets/boyeros.png";

export const config = {
    developer: {
        name: "Tobias",
        fullName: "Tobias Tofalo",
        title: "Desarrollador Full-Stack",
        description: "Desarrollador Full-Stack apasionado por crear aplicaciones web modernas, sistemas inteligentes y soluciones digitales innovadoras."
    },
    social: {
        github: "ttofalo",
        email: "ttofalo@gmail.com",
        location: "Cordoba, Argentina"
    },
    about: {
        title: "Sobre Mí",
        description: "Egresado en Desarrollo de Software, con experiencia en soluciones web y mobile usando React, JavaScript, TypeScript y Java. Actualmente trabajo como Frontend Developer, participando en el desarrollo de sistemas internos, integración de APIs REST y construcción de interfaces mantenibles y de calidad.",
        description2: "Tengo experiencia en entornos corporativos y trabajo en equipo bajo metodología Scrum, con foco en la calidad del software y la experiencia de usuario. Actualmente curso la Licenciatura en Ciencia de Datos, aportando una mirada analítica orientada a soluciones basadas en datos."
    },
    experiences: [
        {
            position: "Licenciatura en Ciencia de Datos",
            company: "Universidad del Gran Rosario",
            period: "Dec 2025 - Actualidad",
            type: "education",
            description: "Formación en análisis de datos, machine learning y técnicas de procesamiento de información."
        },
        {
            position: "FrontEnd Developer",
            company: "Porta Hnos. S.A.",
            period: "Sept 2025 - Actualidad",
            type: "work",
            description: "Desarrollo de sistemas internos con ReactJS, MaterialUI y ChakraUI. Integración de APIs REST."
        },
        {
            position: "Asistente IT",
            company: "Porta Hnos. S.A.",
            period: "Jun 2025 - Sept 2025",
            type: "work",
            description: "Soporte de hardware, gestión de herramientas como WinCC, SharePoint, WMS y Active Directory."
        },
        {
            position: "Tecnicatura Desarrollo de Software",
            company: "Instituto Superior Santo Domingo",
            period: "Feb 2023 - Dic 2025",
            type: "education",
            description: "Formación en programación, bases de datos, redes y desarrollo web/móvil con metodologías ágiles."
        },
        {
            position: "Analista de Infraestructura",
            company: "Nutefusion Ltd.",
            period: "Sept 2023 - Mar 2024",
            type: "work",
            description: "Configuración de VPNs, mantenimiento de hardware y soporte remoto en entornos corporativos."
        }
    ],
    projects: [
        {
            id: 1,
            title: "Landing Page Cabaña",
            category: "Web Development",
            technologies: "React, Next.js, Tailwind CSS, Vercel",
            image: cabanaImg,
            description: "Landing page moderna y responsiva para el complejo turístico 'Cabaña El Amanecer', optimizada para conversión.",
            link: "https://elamanecer.com.ar"
        },
        {
            id: 2,
            title: "Práctica Examen Náutico",
            category: "Web Application",
            technologies: "React, Next.js, Tailwind CSS, Vercel",
            image: examenImg,
            description: "Aplicación interactiva para la práctica y simulación de exámenes náuticos, facilitando el aprendizaje de los estudiantes.",
            link: "https://examennauticocba111.vercel.app/"
        },
        {
            id: 3,
            title: "Sistema Automatización Boyeros",
            category: "IoT / Full Stack",
            technologies: "VPS, CI/CD, FastAPI, React, ChakraUI",
            image: boyerosImg,
            description: "Sistema integral de monitoreo y automatización para boyeros eléctricos con integración IoT y panel de administración.",
            link: ""
        }
    ],
    contact: {
        email: "ttofalo@gmail.com",
        github: "https://github.com/ttofalo",
        linkedin: "https://www.linkedin.com/in/tobiastofalo",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        frontend: {
            title: "FRONTEND DEV",
            description: "Desarrollo de interfaces modernas y escalables",
            details: "Especializado en la creación de aplicaciones web de alto rendimiento, interfaces de usuario intuitivas y sistemas modulares. Enfoque en accesibilidad, rendimiento y buenas prácticas de desarrollo.",
            tools: ["React", "Next.js", "JavaScript", "TypeScript", "TailwindCSS", "API REST", "Docker", "Git", "Postman", "Azure Devops"]
        }
    }
};


