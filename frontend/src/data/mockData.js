const mockData = {
  services: [
    {
      title: "Python Backend",
      description: "Robust APIs and services using FastAPI & Flask."
    },
    {
      title: "AI Model Building",
      description: "Design & train ML/DL models for real-world tasks."
    },
    {
      title: "Gen-AI Apps",
      description: "End-to-end Gen-AI solutions with LLMs & vector DBs."
    },
    {
      title: "Deployments",
      description: "Docker, K8s & cloud CI/CD for smooth releases."
    }
  ],

  techStack: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
  ],

  education: [
    {
      institution: "Bharath Matha Degree College",
      degree: "Bachelor of Computer Science",
      university: "Mysore University",
      location: "Mysore, Karnataka, India 🇮🇳",
      duration: "Aug. 2019 - 2022"
    },
    {
      institution: "Raffles International PU college",
      degree: "ECBA",
      university: "Raffles International",
      location: "Coorg, Karnataka, India 🇮🇳",
      duration: "Aug. 2017 - 2019"
    },
    {
      institution: "Ankur Public School",
      degree: "High School",
      university: "CBSE",
      location: "Coorg, Karnataka, India 🇮🇳",
      duration: "June. 2013 - Jun. 2016"
    }
  ],

  experience: [
    {
      company: "Neutrinos",
      position: "Machine Learning Engineer - II",
      duration: "Feb 2024 - Present",
      location: "Bangalore, Karnataka, India 🇮🇳",
      achievements: [
        "Developed high-accuracy Key-Value Pair Detection Model using YOLOv8, OCR, and Seldon Core (99% field-level accuracy)",
        "Built Intelligent Document Processing (AI-HUB) platform with AutoML frameworks, RabbitMQ, Celery, MongoDB, FastAPI",
        "Deployed ML models as scalable microservices using Docker, Kubernetes, FastAPI",
        "Designed configurable GenAI application with integrated guardrail layer for LLMs"
      ],
      technologies: "Python, ML, DL, NLP, RabbitMQ, Celery, Redis, ELK, Ollama, FastAPI, Jenkins, Docker, Kubernetes, MLflow, DBT, MongoDB, Keras, TensorFlow, PyTorch, LangChain, VectorDB"
    }
  ],

  featuredProjects: [
    {
      name: "PAPERMATE",
      tagline: "Delivers Perfect ArXiv Papers",
      description: "Built NLP-powered personalized arXiv paper recommendations. Integrated Q&A and summarization (boosted satisfaction 65% → 85%)",
      stack: "Python, Transformers, LLMs, LangChain, Django, AWS, PostgreSQL, VectorDB"
    },
    {
      name: "BREAST CANCER PREDICTOR",
      tagline: "Cancer Classifier with 98% precision",
      description: "ML model using logistic regression for benign vs malignant prediction",
      stack: "Scikit-Learn, Pandas, Matplotlib, Streamlit"
    }
  ],

  projects: [
    {
      title: "AI Document Processing Platform",
      category: "AI Apps",
      description: "Intelligent document processing system with 99% accuracy using YOLOv8 and OCR technologies.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      technologies: ["Python", "YOLOv8", "OCR", "FastAPI", "MongoDB"]
    },
    {
      title: "GenAI Chat Application",
      category: "AI Apps",
      description: "Configurable GenAI application with integrated guardrail layer for secure LLM interactions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      technologies: ["LangChain", "Ollama", "VectorDB", "FastAPI", "React"]
    },
    {
      title: "PaperMate - ArXiv Recommender",
      category: "ML Projects",
      description: "NLP-powered personalized research paper recommendation system with Q&A capabilities.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      technologies: ["Transformers", "LangChain", "Django", "PostgreSQL", "AWS"]
    },
    {
      title: "Breast Cancer Predictor",
      category: "ML Projects",
      description: "Machine learning model for cancer classification with 98% precision using logistic regression.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      technologies: ["Scikit-Learn", "Pandas", "Matplotlib", "Streamlit"]
    },
    {
      title: "ML Pipeline Automation",
      category: "Data Science",
      description: "Automated ML pipeline with Docker, Kubernetes, and MLflow for model deployment and monitoring.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      technologies: ["Docker", "Kubernetes", "MLflow", "Jenkins", "Python"]
    },
    {
      title: "Real-time Analytics Dashboard",
      category: "Web Development",
      description: "Interactive dashboard for real-time data visualization and analytics using modern web technologies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["React", "D3.js", "FastAPI", "WebSocket", "Redis"]
    }
  ],

  blogPosts: [
    {
      title: "Understanding Transformer Architecture in Deep Learning",
      excerpt: "A comprehensive guide to understanding how Transformers revolutionized NLP and their applications in modern AI systems.",
      date: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["Deep Learning", "NLP", "Transformers"]
    },
    {
      title: "Building Scalable ML Pipelines with Docker and Kubernetes",
      excerpt: "Learn how to containerize your machine learning models and deploy them at scale using modern DevOps practices.",
      date: "Jan 10, 2025",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      tags: ["MLOps", "Docker", "Kubernetes"]
    },
    {
      title: "Fine-tuning Large Language Models for Domain-Specific Tasks",
      excerpt: "Explore techniques for adapting pre-trained LLMs to specific domains and achieving better performance on specialized tasks.",
      date: "Jan 5, 2025",
      image: "https://images.unsplash.com/photo-1655720406770-12ea329b5b61?w=400&h=250&fit=crop",
      tags: ["LLM", "Fine-tuning", "AI"]
    },
    {
      title: "Vector Databases: The Backbone of Modern AI Applications",
      excerpt: "Understanding how vector databases enable semantic search, recommendation systems, and RAG applications in the AI era.",
      date: "Dec 28, 2024",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      tags: ["Vector Database", "RAG", "Semantic Search"]
    },
    {
      title: "Python Performance Optimization for Machine Learning",
      excerpt: "Essential techniques and best practices for optimizing Python code performance in machine learning workflows.",
      date: "Dec 20, 2024",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      tags: ["Python", "Performance", "Machine Learning"]
    },
    {
      title: "Implementing Retrieval-Augmented Generation (RAG) Systems",
      excerpt: "A practical guide to building RAG systems that combine the power of retrieval and generation for enhanced AI responses.",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      tags: ["RAG", "LangChain", "AI"]
    }
  ],

  achievements: [
    {
      type: "certification",
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Specialized certification in ML on AWS, covering model development, deployment, and optimization.",
      skills: ["AWS SageMaker", "ML Deployment", "Model Optimization"]
    },
    {
      type: "certification",
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      description: "Professional certification demonstrating proficiency in building and training neural networks using TensorFlow.",
      skills: ["TensorFlow", "Deep Learning", "Neural Networks"]
    },
    {
      type: "award",
      title: "Best ML Innovation Award",
      issuer: "Neutrinos Tech Conference",
      date: "2024",
      description: "Recognized for innovative work in document processing using computer vision and NLP technologies."
    },
    {
      type: "recognition",
      title: "Top Performer of the Year",
      issuer: "Neutrinos",
      date: "2024",
      description: "Outstanding performance in ML model development and deployment, contributing to 99% accuracy improvements."
    },
    {
      type: "certification",
      title: "Deep Learning Specialization",
      issuer: "Coursera - Andrew Ng",
      date: "2023",
      description: "Comprehensive specialization covering neural networks, CNN, RNN, and advanced deep learning concepts.",
      skills: ["Deep Learning", "CNN", "RNN", "LSTM"]
    }
  ],

  skills: [
    {
      category: "Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-Learn", level: 92 },
        { name: "Pandas", level: 93 },
        { name: "NumPy", level: 90 }
      ]
    },
    {
      category: "Deep Learning & AI",
      skills: [
        { name: "Neural Networks", level: 88 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 87 },
        { name: "LangChain", level: 82 },
        { name: "Transformers", level: 80 },
        { name: "LLMs", level: 85 }
      ]
    },
    {
      category: "DevOps & Deployment",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS", level: 82 },
        { name: "Jenkins", level: 78 },
        { name: "MLflow", level: 85 },
        { name: "FastAPI", level: 90 }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Elasticsearch", level: 75 },
        { name: "Git", level: 95 },
        { name: "Linux", level: 85 }
      ]
    }
  ]
};

export default mockData;