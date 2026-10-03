import cabanaImg from "./assets/cabaña.png";
import examenImg from "./assets/examen.png";
import invictusImg from "./assets/invictus.png";
import boyerosImg from "./assets/boyeros.png";
import desarrolladoraImg from "./assets/desarrolladora.png";
import bevalueImg from "./assets/bevalue_landing.png";
import bionteImg from "./assets/bionte.png";

export const config = {
    developer: {
        name: "Tobias",
        fullName: "Tobias Tofalo",
        title: "Software Engineer",
        description: "Software Engineer apasionado por crear aplicaciones web modernas, sistemas inteligentes y soluciones digitales innovadoras."
    },
    social: {
        github: "ttofalo",
        email: "ttofalo@gmail.com",
        location: "Cordoba, Argentina"
    },
    about: {
        title: "Sobre Mí",
        description: "Software Engineer egresado en Desarrollo de Software. Me enfoco en el backend que sostiene la confiabilidad de un producto a escala y bajo datos reales: data-quality, fraud detection, KYC e infraestructura de comunicaciones por encima de la feature aislada. Hoy en Silencio Network, una plataforma global de Voice AI con +1M de usuarios que recolecta y valida datos de voz para entrenar modelos de IA, sobre un stack serverless en AWS, con Node.js, Python, React, TypeScript y PostgreSQL.",
        description2: "Mi experiencia previa cubre la construcción de sistemas internos desde cero y la administración de infraestructura corporativa como Active Directory, SharePoint, ERP y VPNs. Esa base me da una visión concreta de cómo el software se encuentra con la operación real de una empresa.",
        description3: "Cursando la Licenciatura en Ciencia de Datos en la Universidad del Gran Rosario, sumando una mirada analítica al perfil técnico."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "Silencio Network",
            period: "Sept 2026 - Actualidad",
            type: "work",
            description: "Desarrollo de features end to end para una plataforma global de Voice AI con +1M de usuarios que recolecta y valida datos de voz para entrenar modelos de IA. Participación en KYC, fraud detection, data-quality, Mail Communications sobre AWS SES y herramientas internas de operación y analytics. Stack: AWS, Node.js, Python, React, PostgreSQL."
        },
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
            period: "Sept 2025 - Sept 2026",
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
            title: "Invictus Gym",
            category: "Web Application",
            technologies: "React, CSS, JavaScript",
            image: invictusImg,
            description: "Aplicación web moderna para gimnasio, con gestión de membresías, rutinas de entrenamiento y seguimiento de progreso.",
            link: "https://www.invictusgym.com.ar/"
        },
        {
            id: 2,
            title: "Cabaña El Amanecer",
            category: "Web Development",
            technologies: "React, Next.js, Tailwind CSS, Vercel",
            image: cabanaImg,
            description: "Landing page moderna y responsiva para el complejo turístico 'Cabaña El Amanecer', optimizada para conversión.",
            link: "https://www.elamanecer.com.ar/"
        },
        {
            id: 3,
            title: "Ecosistema Be Value",
            category: "Startup / Full Stack & Mobile",
            technologies: "React, Next.js, Tailwind CSS, Vercel, MongoDB, Java, API Mercado Pago",
            image: bevalueImg,
            description: "Ecosistema de software completo para startup de triple impacto que recompensa el reciclaje con descuentos en comercios. Proyecto de tesis. Integra landing page, panel administrativo, panel de negocio adherido y app Android nativa en Java publicada en PlayStore, todo conectado a una misma base de datos MongoDB.",
            link: "https://bevalue.com.ar"
        },
        {
            id: 4,
            title: "Figueroa Desarrollos",
            category: "Web Landing Page",
            technologies: "React.js, Next.js, Vercel, Radix UI, Tailwind CSS",
            image: desarrolladoraImg,
            description: "Landing page premium para desarrolladora inmobiliaria, con enfoque en diseño moderno y experiencia de usuario fluida.",
            link: "https://figueroadesarollos.com.ar/"
        },
        {
            id: 5,
            title: "Sistema Automatización Boyeros",
            category: "IoT / Full Stack",
            technologies: "ESP-32, WebSocket, FastAPI, Python, React, ChakraUI, VPS",
            image: boyerosImg,
            description: "Sistema IoT basado en un ESP-32 que se conecta vía WiFi a un backend desplegado en un VPS mediante WebSocket. Según el estado recibido, el microcontrolador activa o desactiva un relé que controla la corriente del boyero eléctrico. Para el usuario, todo se gestiona desde un frontend simple e intuitivo donde puede encender o apagar el boyero con un solo clic.",
            link: ""
        },
        {
            id: 6,
            title: "Test Examen Náutico",
            category: "Web Application",
            technologies: "React, Next.js, Tailwind CSS, Vercel",
            image: examenImg,
            description: "Aplicación interactiva para la práctica y simulación de exámenes náuticos, facilitando el aprendizaje de los estudiantes.",
            link: "https://examennauticocba111.vercel.app/"
        },
        {
            id: 7,
            title: "Bionte",
            category: "Accessibility / Full Stack & Mobile",
            technologies: "Expo, React Native Web, TypeScript, Node.js, Express, PostgreSQL, Konva",
            image: bionteImg,
            description: "Sistema de navegación indoor asistida por voz, pensado para personas con discapacidad visual.",
            link: "https://www.bionte.com.ar"
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
            title: "SOFTWARE DEVELOPMENT",
            description: "Desarrollo de interfaces modernas y escalables",
            details: "Especializado en la creación de aplicaciones web de alto rendimiento, interfaces de usuario intuitivas y sistemas modulares. Enfoque en accesibilidad, rendimiento y buenas prácticas de desarrollo.",
            tools: ["React", "Next.js", "JavaScript", "TypeScript", "Java", "TailwindCSS", "API REST", "Docker", "Git", "Postman", "Azure Devops"]
        }
    }
};
