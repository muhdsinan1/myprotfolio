export const personalData = {
  name: "Muhammad Sinan",
  headline: "AI Engineer | Python Developer | Full-Stack Developer",
  positioning:
    "Building intelligent, scalable and production-ready software with AI, Python, modern web technologies and cloud infrastructure.",
  statusBadge: "AVAILABLE FOR OPPORTUNITIES",
  statusCard: {
    title: "AI / SOFTWARE ENGINEER",
    subtitle: "Python • AI • Cloud • Full Stack",
    location: "India • Open to Global & Remote Roles",
    availability: "Immediate / Full-Time & Contract"
  },
  socials: {
    github: "https://github.com/muhdsinan1",
    linkedin: "https://www.linkedin.com/in/muhammad-sinancp",
    email: "muhdsinan2424@gmail.com",
    resumeUrl: "./assets/resume.pdf"
  },
  stats: [
    {
      value: "BCA",
      title: "Specialization",
      subtitle: "AI • Cloud • DevOps"
    },
    {
      value: "8+",
      title: "Major Projects",
      subtitle: "Production & Research"
    },
    {
      value: "AI",
      title: "Core Competency",
      subtitle: "Machine Learning & CV"
    },
    {
      value: "Full Stack",
      title: "System Architecture",
      subtitle: "Frontend + Backend + DB"
    }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming and scripting languages for backend, algorithmic tasks and web interfaces.",
    skills: [
      { name: "Python", level: 92, tag: "Primary Language", note: "AsyncIO, OOP, Scripting, Data Science" },
      { name: "JavaScript", level: 86, tag: "Modern ES6+", note: "Async/Await, DOM, React Ecosystem" },
      { name: "SQL", level: 84, tag: "Relational Queries", note: "Complex Joins, Indexing, Schema Design" },
      { name: "Java", level: 78, tag: "Object-Oriented", note: "Spring Boot, JVM Architecture" },
      { name: "HTML5", level: 95, tag: "Semantic Markup", note: "Accessibility, Modern Web Standards" },
      { name: "CSS3", level: 90, tag: "Styling & Responsive", note: "Flexbox, Grid, Animations, Tailwind" }
    ]
  },
  {
    category: "AI / Machine Learning",
    description: "Deep learning, neural networks, computer vision, and NLP frameworks for intelligent applications.",
    skills: [
      { name: "TensorFlow", level: 85, tag: "Deep Learning", note: "Model Training, Transfer Learning" },
      { name: "Keras", level: 86, tag: "Neural Networks", note: "Sequential & Functional CNNs" },
      { name: "Scikit-learn", level: 88, tag: "Machine Learning", note: "Classification, Regression, Pipelines" },
      { name: "OpenCV", level: 85, tag: "Computer Vision", note: "Image Processing, Feature Extraction" },
      { name: "Pandas", level: 90, tag: "Data Manipulation", note: "Data Cleaning, Transformation" },
      { name: "NumPy", level: 90, tag: "Numerical Arrays", note: "Matrix Computations, Vectorization" },
      { name: "NLP", level: 80, tag: "Language Processing", note: "Intent Recognition, Tokenization, Text Preprocessing" },
      { name: "Computer Vision", level: 84, tag: "Visual Intelligence", note: "Haar Cascades, Wavelet Transforms, CNNs" }
    ]
  },
  {
    category: "Backend",
    description: "High-performance server architecture, asynchronous microservices and enterprise REST APIs.",
    skills: [
      { name: "FastAPI", level: 88, tag: "Modern Async API", note: "Pydantic, OpenAPI, High Concurrency" },
      { name: "Django", level: 85, tag: "Full-Featured Web", note: "ORM, Authentication, Admin, MVC" },
      { name: "Django REST Framework", level: 86, tag: "REST Architecture", note: "Serializers, ViewSets, Token Auth" },
      { name: "Flask", level: 82, tag: "Micro-framework", note: "Lightweight Prototyping & AI Endpoints" },
      { name: "Spring Boot", level: 78, tag: "Enterprise Backend", note: "Spring Data JPA, REST Controllers" }
    ]
  },
  {
    category: "Frontend",
    description: "Component-driven, responsive user interfaces designed for speed, usability and elegance.",
    skills: [
      { name: "React", level: 88, tag: "Core UI Library", note: "Hooks, Context, Component Design, Vite" },
      { name: "Angular", level: 76, tag: "Enterprise Frontend", note: "TypeScript, Services, Dependency Injection" },
      { name: "Vite", level: 90, tag: "Next-Gen Tooling", note: "HMR, Modern Bundling, Build Optimization" },
      { name: "Tailwind CSS", level: 92, tag: "Utility First", note: "Modern Design Systems, Responsive Layouts" }
    ]
  },
  {
    category: "Databases",
    description: "Structured relational databases, query optimization, ACID compliance and persistent data stores.",
    skills: [
      { name: "PostgreSQL", level: 86, tag: "Advanced RDBMS", note: "Complex Joins, JSONB, Indexing, Transactions" },
      { name: "MySQL", level: 85, tag: "Enterprise Relational", note: "Stored Procedures, Foreign Keys, Schema Design" },
      { name: "SQLite", level: 90, tag: "Embedded Database", note: "Lightweight Prototyping, Testing" }
    ]
  },
  {
    category: "Cloud / DevOps",
    description: "Modern containerization, version control, automated build pipelines, and production workflows.",
    skills: [
      { name: "Docker", level: 84, tag: "Containerization", note: "Dockerfile, Docker Compose, Multi-stage Builds" },
      { name: "Git", level: 90, tag: "Version Control", note: "Branching Strategies, Merge Workflows" },
      { name: "GitHub", level: 90, tag: "Collaboration", note: "PR Reviews, Issue Tracking, Actions" },
      { name: "Cloud Deployment", level: 80, tag: "Infrastructure", note: "Vercel, Render, Railway, AWS/GCP basics" },
      { name: "CI/CD", level: 78, tag: "Automation", note: "Automated Testing, Continuous Delivery Pipelines" }
    ]
  }
];

export const projectsData = [
  {
    id: "ai-digital-human",
    featured: true,
    title: "AI Digital Human",
    tagline: "Conversational AI & Real-time Digital Avatar",
    category: "AI & Full-Stack",
    overview:
      "An AI-powered conversational application and digital human system featuring low-latency backend communication, intelligent natural language understanding, and an interactive modern web frontend.",
    problemSolved:
      "Standard chatbots lack personality and real-time interactive presence. This project combines conversational intelligence with an expressive frontend interface and asynchronous backend APIs to deliver an intuitive digital human experience.",
    technologies: ["Python", "FastAPI", "AI", "React", "APIs", "WebSockets", "Tailwind CSS"],
    highlights: [
      "Asynchronous FastAPI backend enabling high-concurrency requests and low-latency response generation",
      "Real-time bidirectional communication pipeline for continuous conversational streaming",
      "Intelligent prompt management and context retention across multi-turn interactions",
      "Dynamic visual audio-reactive interface built with modern React components",
      "Modular microservice architecture separating LLM/NLP inference from API routing"
    ],
    github: "https://github.com/muhdsinan1/ai-digital-human",
    demo: "https://ai-digital-human-demo.vercel.app",
    hasLiveDemo: true,
    image: "./assets/projects/ai-digital-human.png",
    architecture: {
      client: "React + Modern UI with Audio-Visual feedback",
      server: "FastAPI Async Webhook & WebSocket Manager",
      aiEngine: "NLP Pipeline with dynamic context retention",
      deployment: "Dockerized Container deployed to Cloud"
    }
  },
  {
    id: "goia-chatbot",
    featured: false,
    title: "GOIA AI Chatbot",
    tagline: "Intent-Driven Dialogflow & Database Integration",
    category: "Conversational AI & Backend",
    overview:
      "Enterprise customer conversation agent integrating Google Dialogflow NLP with a custom FastAPI webhook server and MySQL database for automated order queries and customer interactions.",
    problemSolved:
      "Businesses struggle with high support ticket volumes for routine status checks. GOIA automates natural language customer inquiries and fulfills order-specific data directly from MySQL.",
    technologies: ["Dialogflow", "FastAPI", "Python", "MySQL", "Pydantic", "REST APIs"],
    highlights: [
      "Custom Dialogflow agent with trained intents, entities, and context handlers",
      "Robust FastAPI fulfillment webhook processing JSON payloads in sub-second latency",
      "Secure MySQL integration managing persistent order records and client logs",
      "Graceful fallback handling ensuring users receive clear guidance when inputs are ambiguous"
    ],
    github: "https://github.com/muhdsinan1/goia-ai-chatbot",
    demo: "#",
    hasLiveDemo: false,
    image: "./assets/projects/goia-chatbot.png",
    architecture: {
      client: "Web Chat Interface / Messaging Client",
      server: "FastAPI Fulfillment Engine",
      aiEngine: "Dialogflow Natural Language Understanding",
      deployment: "MySQL Relational Schema + Cloud Webhook"
    }
  },
  {
    id: "potato-leaf-disease",
    featured: false,
    title: "Potato Leaf Disease Detection",
    tagline: "Deep Learning CNN Image Classification",
    category: "Computer Vision & Deep Learning",
    overview:
      "An end-to-end computer vision classification system designed to detect agricultural potato leaf diseases (Early Blight, Late Blight, Healthy) from digital field imagery using Convolutional Neural Networks.",
    problemSolved:
      "Fungal leaf diseases can devastate entire crops if undetected. This automated tool allows instantaneous visual diagnosis from a simple photograph, enabling targeted treatment without expert agronomists.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy", "Matplotlib"],
    highlights: [
      "Custom Convolutional Neural Network (CNN) trained with dropout and data augmentation",
      "OpenCV image preprocessing pipeline for noise reduction, resizing, and normalization",
      "High accuracy classification across Early Blight, Late Blight, and Healthy foliage",
      "Visual inference reporting returning predicted disease class with confidence score"
    ],
    pipelineSteps: [
      "Dataset Collection & Curation",
      "Image Augmentation & OpenCV Preprocessing",
      "CNN Deep Architecture Training",
      "Validation & Performance Tuning",
      "Inference API & Real-time Prediction"
    ],
    github: "https://github.com/muhdsinan1/potato-leaf-disease-detection",
    demo: "#",
    hasLiveDemo: false,
    image: "./assets/projects/potato-disease.png"
  },
  {
    id: "sports-celebrity-classifier",
    featured: false,
    title: "Sports Celebrity Classification",
    tagline: "Facial Feature Extraction & Support Vector Machines",
    category: "Computer Vision & ML",
    overview:
      "A computer vision classification pipeline that accurately identifies high-profile sports icons using facial landmark detection, wavelet transform feature extraction, and Support Vector Machines.",
    problemSolved:
      "Raw image pixels contain immense noise and lighting variance. This project demonstrates classic ML feature engineering by combining spatial pixel data with frequency-domain wavelet transforms.",
    technologies: ["Python", "OpenCV", "Scikit-learn", "SVM", "NumPy", "Flask"],
    highlights: [
      "Haar Cascade classifiers to detect face bounding boxes and eye alignment",
      "Wavelet transformation (PyWavelets) extracting sharp frequency edge features",
      "Hyperparameter grid search optimizing SVM kernels (RBF vs Linear)",
      "Lightweight model serialization with Joblib for instant inference execution"
    ],
    github: "https://github.com/muhdsinan1/sports-celebrity-classification",
    demo: "#",
    hasLiveDemo: false,
    image: "./assets/projects/sports-celebrity.png"
  },
  {
    id: "footarena",
    featured: false,
    title: "FoOtAreNa",
    tagline: "Sports Turf Discovery & Slot Booking Platform",
    category: "Full-Stack Web Application",
    overview:
      "A full-stack sports platform built for football enthusiasts to explore local sports arenas, inspect turf specifications, and reserve hourly play slots with real-time schedule conflict prevention.",
    problemSolved:
      "Replaces chaotic phone-call bookings and overlapping reservations with an intuitive web platform featuring live availability and structured relational bookings.",
    technologies: ["React", "Django", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Dynamic interactive user interface with turf gallery and slot selectors",
      "Django REST Framework backend implementing strict transactional slot locking",
      "PostgreSQL database tracking users, arenas, bookings, and operational hours",
      "Role-based control for arena operators to manage schedules and pricing"
    ],
    github: "https://github.com/muhdsinan1/footarena-turf-booking",
    demo: "#",
    hasLiveDemo: false,
    image: "./assets/projects/footarena.png"
  },
  {
    id: "quiz-application",
    featured: false,
    title: "Full-Stack Quiz Application",
    tagline: "Timed Assessment & Dynamic Evaluation Platform",
    category: "Enterprise Full-Stack",
    overview:
      "A comprehensive quiz and examination platform featuring category filtering, difficulty tiers, real-time question timers, and an automated grading engine.",
    problemSolved:
      "Provides schools and learners with an accessible, distraction-free testing environment that prevents late submissions with client and server synchronized timeouts.",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Java", "REST API", "Bootstrap"],
    highlights: [
      "Multi-category and difficulty tier selector tailored to specific domains",
      "Synchronized countdown timer with automatic test submission safeguards",
      "Question palette navigation allowing students to mark and review answers",
      "Enterprise Java Spring Boot REST API delivering robust data validation and scoring"
    ],
    github: "https://github.com/muhdsinan1/fullstack-quiz-app",
    demo: "#",
    hasLiveDemo: false,
    image: "./assets/projects/quiz-app.png"
  }
];

export const caseStudyPipeline = [
  {
    step: "01",
    title: "Problem Definition",
    badge: "Requirements & Scope",
    icon: "Target",
    description:
      "Framing the core objective, defining input/output contracts, establishing latency targets, and determining evaluation metrics before writing code."
  },
  {
    step: "02",
    title: "Data Engineering",
    badge: "Quality & Preprocessing",
    icon: "Database",
    description:
      "Collecting, sanitizing, normalizing, and augmenting datasets using Pandas, NumPy, and OpenCV to eliminate bias and class imbalance."
  },
  {
    step: "03",
    title: "AI Model Development",
    badge: "Architecture & Training",
    icon: "Brain",
    description:
      "Selecting suitable model families (CNN, NLP, SVM), training with TensorFlow/Scikit-learn, tuning hyperparameters, and validating on unseen test splits."
  },
  {
    step: "04",
    title: "Backend API",
    badge: "High-Throughput Services",
    icon: "Server",
    description:
      "Wrapping trained weights into resilient, asynchronous REST or WebSocket APIs using FastAPI and Django REST Framework with strict schema validation."
  },
  {
    step: "05",
    title: "Interactive Frontend",
    badge: "Reactive UI / UX",
    icon: "Layout",
    description:
      "Crafting modern, accessible, and responsive user interfaces with React, state management, and real-time audio/visual status feedback."
  },
  {
    step: "06",
    title: "Database Layer",
    badge: "ACID & Relational Storage",
    icon: "Layers",
    description:
      "Persisting user state, conversational history, and inference logs using PostgreSQL and MySQL with indexed queries and transaction safety."
  },
  {
    step: "07",
    title: "Docker Containerization",
    badge: "Portability & Isolation",
    icon: "Box",
    description:
      "Building lightweight multi-stage Docker images to guarantee reproducible environments across development, staging, and production."
  },
  {
    step: "08",
    title: "Cloud & DevOps",
    badge: "Continuous Delivery",
    icon: "Cloud",
    description:
      "Automating deployment with Git workflows, environment configuration, and cloud hosting infrastructure for scalable, reliable uptime."
  }
];

export const experienceData = [
  {
    role: "Machine Learning Intern",
    company: "TCS",
    period: "Remote Internship",
    badge: "AI & ML Specialization",
    type: "Remote Internship",
    responsibilities: [
      "Conducted extensive exploratory data analysis (EDA), data cleaning, and statistical preprocessing using Python.",
      "Engineered features and prepared normalized datasets to maximize predictive signal for machine learning algorithms.",
      "Built, trained, and benchmarked predictive models utilizing Scikit-learn and evaluation metrics (accuracy, precision, recall, F1).",
      "Conducted hyperparameter tuning and model optimization experiments to prevent overfitting on test distributions.",
      "Documented technical findings, analytical methodologies, and performance comparison reports for engineering leads."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Data Science", "Jupyter"]
  }
];

export const educationData = {
  degree: "Bachelor of Computer Applications (BCA)",
  specialization: "Artificial Intelligence, Cloud Computing & DevOps",
  summary:
    "Comprehensive undergraduate degree combining strong foundational computer science principles with specialized coursework in modern artificial intelligence, cloud architectures, containerization, and enterprise software engineering.",
  coursework: [
    { name: "Artificial Intelligence", category: "Core AI" },
    { name: "Machine Learning", category: "Core AI" },
    { name: "Natural Language Processing (NLP)", category: "Core AI" },
    { name: "Data Analysis & Statistics", category: "Mathematics & Data" },
    { name: "Algorithms & Data Structures", category: "Computer Science" },
    { name: "Operating Systems", category: "Systems" },
    { name: "Database Management Systems (DBMS)", category: "Systems" },
    { name: "Cloud Computing & Virtualization", category: "Infrastructure" },
    { name: "DevOps & Continuous Delivery", category: "Infrastructure" },
    { name: "Software Engineering Methodologies", category: "Engineering" }
  ]
};

export const journeyData = [
  {
    phase: "01",
    title: "Programming Foundations",
    focus: "Core logic, algorithms, control flow, and fundamental computational thinking.",
    tech: ["Logic", "C / Java Basics", "Algorithms"]
  },
  {
    phase: "02",
    title: "Python Development",
    focus: "Mastering Python OOP, data structures, scripting, clean code conventions, and automation.",
    tech: ["Python 3", "OOP", "Data Structures", "AsyncIO"]
  },
  {
    phase: "03",
    title: "Machine Learning",
    focus: "Statistical modeling, supervised & unsupervised learning, classification, and regression with Scikit-learn.",
    tech: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    phase: "04",
    title: "Computer Vision",
    focus: "Image processing, spatial filtering, feature extraction, Haar cascades, and CNN architectures.",
    tech: ["OpenCV", "TensorFlow", "Keras", "CNN"]
  },
  {
    phase: "05",
    title: "AI Applications",
    focus: "Translating models into conversational agents, NLP bots, and interactive digital human applications.",
    tech: ["Dialogflow", "FastAPI", "NLP", "Real-Time APIs"]
  },
  {
    phase: "06",
    title: "Full-Stack Development",
    focus: "Architecting end-to-end applications with React, Angular, Django, Spring Boot, and PostgreSQL.",
    tech: ["React", "Django REST", "Spring Boot", "PostgreSQL"]
  },
  {
    phase: "07",
    title: "Cloud & DevOps",
    focus: "Packaging software with Docker, managing Git branching, and preparing automated deployment workflows.",
    tech: ["Docker", "Git/GitHub", "Linux", "CI/CD Pipelines"]
  },
  {
    phase: "08",
    title: "AI Engineering",
    focus: "Building production-grade, scalable AI software that marries intelligent models with resilient architectures.",
    tech: ["Production AI", "Microservices", "Scalability", "System Design"]
  }
];

export const githubShowcase = {
  username: "muhdsinan1",
  profileUrl: "https://github.com/muhdsinan1",
  title: "Code Is Where The Work Lives",
  subtitle:
    "Explore the repositories behind the models, backend microservices, and full-stack applications. Every project is built with clean architecture and reproducible setups.",
  stats: {
    repositories: "18+",
    commitsThisYear: "480+",
    contributions: "Consistent commits & structured pull requests",
    focus: "Python, AI Pipelines, React, Cloud"
  },
  pinnedRepos: [
    {
      name: "ai-digital-human",
      desc: "Conversational AI digital avatar application using FastAPI, asynchronous audio-visual streaming, and modern React interface.",
      stars: 12,
      forks: 3,
      lang: "Python",
      langColor: "#3572A5"
    },
    {
      name: "potato-leaf-disease-detection",
      desc: "Deep learning CNN classifier engineered with TensorFlow & OpenCV for automated agricultural leaf pathology detection.",
      stars: 8,
      forks: 2,
      lang: "Python",
      langColor: "#3572A5"
    },
    {
      name: "goia-ai-chatbot",
      desc: "Enterprise conversational webhook agent integrating Dialogflow NLP, FastAPI, and MySQL relational order storage.",
      stars: 7,
      forks: 1,
      lang: "Python",
      langColor: "#3572A5"
    },
    {
      name: "footarena-turf-booking",
      desc: "Sports arena reservation platform built with React, Django REST Framework, and PostgreSQL ACID transaction safety.",
      stars: 9,
      forks: 2,
      lang: "JavaScript",
      langColor: "#f1e05a"
    }
  ]
};
