
    const translations = {
      en: {
        headerTitle: "Hi, I'm Gerardo Ramírez",
        headerSubtitle: "Software Engineer | Full Stack Developer | JavaScript | C# | .NET | Angular | Docker | DevOps",
        contactBtn: "Contact Me",
        aboutTitle: "About Me",
        aboutText: " I am an Ecuadorian systems engineer specializing in web development with experience in both front-end and back-end. I focus on creating websites using modern technologies, applying best practices in architecture and optimization. As a self-taught professional, I engage in continuous learning, reinforcing my knowledge and exploring new tools. I am currently delving into Dart and Flutter, key technologies for developing cross-platform mobile applications. In my free time, I enjoy reading, technological research, and music, activities that complement my creative and analytical approach.",
        aboutSubText: "My tools of choice:",
        experienceTitle: "Experience",
        experienceList: [
          "<strong>Web Developer – 2021 - Present </strong><br> I have participated in multiple web application development projects focused on business management, covering key modules such as payroll, human resources administration, vacation requests, and tax forms for the SRI (Ecuador). I have also contributed to the migration of client-server systems to modern web platforms, improving the scalability, accessibility, and maintenance of solutions. My contribution has included front-end and back-end design and development, database management, and application deployment in production environments, applying best practices in development and optimization.",
          "<strong>Freelance Software Developer— 2019 2021 </strong><br> I have participated in the development of specialized web applications, including an online music sales platform aimed at DJs, as well as a system for dentists focused on patient management, schedules, and medical records. "
        ],
        studiesTitle: "Studies",
        studiesList: [
          "<strong>National University of Loja, Ecuador </strong>  — Systems Engineering",
          "<strong>Mundos E</strong>  — Diplomado DevOps",
          "<strong>José Ochoa León Higher Technological Institute of Pasaje, Ecuador </strong>  — Systems Analysis Technologists"
        ],
        skillsTitle: "Skills",
        cvTitle: "Curriculum Vitae",
        cvText: "Download my CV here:",
        cvBtn: "Download CV",
        contactTitle: "Contact",
        location: "Location: Loja, Ecuador 🇪🇨",
        footerText: "Built with ❤️ Gedo"
      },
      es: {
        headerTitle: "Hola, soy Gerardo Ramírez",
        headerSubtitle: "Ingeniero en Sistemas | Desarrollador Full Stack | JavaScript | C# | .NET | Angular | Docker | DevOps",
        contactBtn: "Contáctame",
        aboutTitle: "Sobre mí",
        aboutText: "Soy un ingeniero de sistemas ecuatoriano especializado en desarrollo web con experiencia tanto en front-end como en back-end. Me centro en la creación de sitios web utilizando tecnologías modernas, aplicando las mejores prácticas en arquitectura y optimización. Como profesional autodidacta, me dedico al aprendizaje continuo, reforzando mis conocimientos y explorando nuevas herramientas. Actualmente estoy profundizando en Dart y Flutter, tecnologías clave para el desarrollo de aplicaciones móviles multiplataforma.  En mi tiempo libre, disfruto de la lectura, la investigación tecnológica y la música, actividades que complementan mi enfoque creativo y analítico.",
        aboutSubText: "Mis herramientas preferidas:",
        
        experienceTitle: "Experiencia",
        experienceList: [
          "<strong>Desarrollador Web – 2021 - Presente </strong><br> He participado en múltiples proyectos de desarrollo de aplicaciones web centrados en la gestión empresarial, cubriendo módulos clave como nóminas, administración de recursos humanos, solicitudes de vacaciones y formularios fiscales para el SRI (Ecuador). También he contribuido a la migración de sistemas cliente-servidor a plataformas web modernas, mejorando la escalabilidad, accesibilidad y mantenimiento de las soluciones. Mi contribución ha incluido el diseño y desarrollo front-end y back-end, la gestión de bases de datos y la implementación de aplicaciones en entornos de producción, aplicando las mejores prácticas en desarrollo y optimización.",
          "<strong>Desarrollador de software autónomo — 2019 2021 </strong><br> He participado en el desarrollo de aplicaciones web especializadas, entre ellas una plataforma de venta de música en línea dirigida a DJ, así como un sistema para dentistas centrado en la gestión de pacientes, horarios y historiales médicos. "

        ],
        studiesTitle: "Estudios",
        studiesList: [
          "<strong>Universidad Nacional de Loja, Ecuador </strong>  — Ingeniero en Sistemas",
          "<strong>Mundos E</strong>  — Diplomado DevOps",
          "<strong>Instituto Superior Tecnológico José Ochoa León  de Pasaje, Ecuador </strong>  — Tecnológo En Analisis y Sistemas"
        ],
        skillsTitle: "Habilidades",
        cvTitle: "Currículum Vitae",
        cvText: "Descarga mi CV aquí:",
        cvBtn: "Descargar CV",
        contactTitle: "Contacto",
        location: "ubicación: Loja, Ecuador 🇪🇨",
        footerText: "Hecho con ❤️ Gedo"
      }
    };

    const els = {
      headerTitle: document.getElementById("header-title"),
      headerSubtitle: document.getElementById("header-subtitle"),
      contactBtn: document.getElementById("contact-btn"),
      aboutTitle: document.getElementById("about-title"),
      aboutText: document.getElementById("about-text"),
      aboutSubText: document.getElementById("about-sub-text"),
      experienceTitle: document.getElementById("experience-title"),
      experienceList: document.getElementById("experience-list"),
      studiesTitle: document.getElementById("studies-title"),
      studiesList: document.getElementById("studies-list"),
      skillsTitle: document.getElementById("skills-title"),
      cvTitle: document.getElementById("cv-title"),
      cvText: document.getElementById("cv-text"),
      cvBtn: document.getElementById("cv-btn"),
      contactTitle: document.getElementById("contact-title"),
      location: document.getElementById("contact-location"),
      footerText: document.getElementById("footer-text")
    };

    function loadLang(lang) {
      const t = translations[lang];
      els.headerTitle.textContent = t.headerTitle;
      els.headerSubtitle.textContent = t.headerSubtitle;
      els.contactBtn.textContent = t.contactBtn;
      els.aboutTitle.textContent = t.aboutTitle;
      els.aboutText.textContent = t.aboutText;
      els.aboutSubText.textContent = t.aboutSubText;
      els.experienceTitle.textContent = t.experienceTitle;
      els.experienceList.innerHTML = t.experienceList.map(i => `<li>${i}</li>`).join("");
      els.studiesTitle.textContent = t.studiesTitle;
      els.studiesList.innerHTML = t.studiesList.map(es => `<li>${es}</li>`).join("");
      els.skillsTitle.textContent = t.skillsTitle;
      els.cvTitle.textContent = t.cvTitle;
      els.cvText.textContent = t.cvText;
      els.cvBtn.textContent = t.cvBtn;
      els.contactTitle.textContent = t.contactTitle;
      els.location.textContent = t.location;
      els.footerText.textContent = t.footerText;
    }


  
    // Language
    const langSelect = document.getElementById("lang-select");
    langSelect.addEventListener("change", e => loadLang(e.target.value));

    // Default
    loadLang("es");
