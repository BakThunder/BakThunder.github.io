export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  mainImage?: string;
  gallery?: { id: string; title: string; path: string }[];
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  skills: { name: string; isLearning?: boolean }[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  year: string;
  tag: string;
  previewPlaceholder: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}

export const portfolioData = {
  ru: {
    experience: {
      subtitle: "EXPERIENCE",
      titleMain: "CAREER &",
      titleAccent: "EDUCATION",
      items: [
        {
          id: "exp-1",
          number: "01",
          title: "ВКТУ им. Д. Серикбаева",
          period: "2022 — 2026",
          description: "Специальность: Математическое и компьютерное моделирование (Усть-Каменогорск). Изучение высшей математики, теории вероятностей, методов оптимизации и алгоритмов машинного обучения.",
          tags: ["Математическое моделирование", "ВКТУ", "Алгоритмы", "Усть-Каменогорск"],
          mainImage: "/images/experience/EKTU.png"
        },
        {
          id: "exp-2",
          number: "02",
          title: "Universiti Teknologi MARA",
          period: "2024",
          description: "Программа академической мобильности и обмена опытом в Малайзии. Исследовательская работа и практика в области системного анализа и современного программирования.",
          tags: ["Академическая мобильность", "Малайзия", "UiTM", "Data Science"],
          mainImage: "/images/experience/MARA.png"
        },
        {
          id: "exp-3",
          number: "03",
          title: "Republic Day of India 2026",
          period: "2026",
          description: "Участие в международном мероприятии, обмен опытом и презентация исследовательских проектов.",
          tags: ["Международный опыт", "Индия", "Презентации", "Проекты"],
          gallery: [
            { id: "p1", title: "RDC 01", path: "/images/experience/RDC1.png" },
            { id: "p2", title: "RDC 02", path: "/images/experience/RDC2.png" },
            { id: "p3", title: "RDC 03", path: "/images/experience/RDC3.png" },
            { id: "p4", title: "RDC 04", path: "/images/experience/RDC4.png" },
            { id: "p5", title: "RDC 05", path: "/images/experience/RDC5.png" }
          ]
        }
      ]
    },
    skillset: {
      subtitle: "SKILLSET",
      titleMain: "TOOLS &",
      titleAccent: "CAPABILITIES",
      marquee: [
        "PYTHON", "DATA ANALYSIS", "MACHINE LEARNING", "SQL", "REACT", "TYPESCRIPT", "GIT", "MODELING", "OPTIMIZATION"
      ],
      categories: [
        {
          id: "sk-1",
          number: "01",
          title: "DATA & ML",
          skills: [
            { name: "Python" }, { name: "NumPy" }, { name: "Pandas" }, 
            { name: "Matplotlib" }, { name: "scikit-learn" }, { name: "Jupyter" }, 
            { name: "предобработка данных" }, { name: "PCA и снижение размерности" }, 
            { name: "ассоциативные правила (Apriori)" }, { name: "feature engineering" }
          ]
        },
        {
          id: "sk-2",
          number: "02",
          title: "MATH & MODELING",
          skills: [
            { name: "математическое моделирование" }, { name: "численная оптимизация" }, 
            { name: "линейное программирование" }, { name: "теория принятия решений" }, 
            { name: "статистика" }, { name: "алгоритмы" }
          ]
        },
        {
          id: "sk-3",
          number: "03",
          title: "DATABASES",
          skills: [
            { name: "SQL" }, { name: "PostgreSQL" }, { name: "pgAdmin" }, 
            { name: "SQL Server" }, { name: "триггеры" }, { name: "резервное копирование и восстановление" }
          ]
        },
        {
          id: "sk-4",
          number: "04",
          title: "WEB & TOOLS",
          skills: [
            { name: "React" }, { name: "TypeScript", isLearning: true }, { name: "HTML/CSS" }, 
            { name: "Next.js", isLearning: true }, { name: "Git и GitHub" }, { name: "VS Code" }, 
            { name: "Node.js" }, { name: "Telegram Bot API" }
          ]
        },
        {
          id: "sk-5",
          number: "05",
          title: "AI & LANGUAGES",
          skills: [
            { name: "промпт-инжиниринг" }, { name: "разработка с помощью ИИ" }, 
            { name: "работа с LLM API", isLearning: true }, { name: "казахский" }, 
            { name: "русский" }, { name: "английский" }, { name: "немецкий", isLearning: true }
          ]
        }
      ],
      qualities: ["ANALYTICAL THINKING", "FAST LEARNER", "CHESS PLAYER"]
    },
    projects: {
      subtitle: "SELECTED WORK",
      titleMain: "FEATURED",
      titleAccent: "PROJECTS",
      items: [
        {
          id: "proj-1",
          number: "01",
          title: "neuro-affirmation_bot",
          year: "2025",
          tag: "Telegram Bot",
          previewPlaceholder: "PROJECT PREVIEW 01",
          description: "Описание скоро",
          technologies: ["Python", "Telegram Bot API", "AI/LLM"],
          images: []
        },
        {
          id: "proj-2",
          number: "02",
          title: "ai-belgi",
          year: "2025",
          tag: "AI",
          previewPlaceholder: "AI BELGI PREVIEW",
          description: "Описание скоро",
          technologies: ["Python", "Machine Learning", "FastAPI"],
          images: [
            "/images/projectss/first_page_aibelgi.png",
            "/images/projectss/second_page_aibelgi.png",
            "/images/projectss/third_page_aibelgi.png"
          ]
        },
        {
          id: "proj-3",
          number: "03",
          title: "VisitKazakhstan web page",
          year: "2026",
          tag: "Web",
          previewPlaceholder: "PROJECT PREVIEW 03",
          description: "Описание скоро",
          technologies: ["React", "Next.js", "Tailwind CSS"],
          images: []
        }
      ]
    }
  }
};