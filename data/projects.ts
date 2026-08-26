export type Project = {
  slug: string;
  title: string;
  repo: string;
  summary: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "multi-agent-software-engineering-assistant",
    title: "Multi-Agent Software Engineering Assistant",
    repo: "https://github.com/spatel842002/Multi-agent-Software-Engineering-assistant",
    summary:
      "Self-hosted engineering assistant for secure repository ingestion, AST-based indexing, RAG-grounded codebase Q&A, patch proposals, and human-reviewed workflows.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Qdrant", "Docker"],
    featured: true
  },
  {
    slug: "realtime-chat-app",
    title: "Real-Time Chat App",
    repo: "https://github.com/spatel842002/Realtime-Chat-App",
    summary:
      "Production-oriented messaging platform with presence, delivery receipts, media, WebRTC, and event-driven integrations.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    featured: true
  },
  {
    slug: "online-grocery-mart",
    title: "Online Grocery Mart",
    repo: "https://github.com/spatel842002/Online-Grocery-Mart",
    summary:
      "Cloud-native commerce platform with catalog, inventory, GraphQL aggregation, Kafka-based order events, and observability.",
    stack: ["Java", "Spring Boot", "React", "Kafka", "MySQL"],
    featured: true
  },
  {
    slug: "3d-object-detection-system",
    title: "3D Object Detection System",
    repo: "https://github.com/spatel842002/3D-Object-Detection-system",
    summary:
      "Computer-vision inference system combining object detection, depth estimation, tracking, and camera calibration.",
    stack: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    featured: true
  },
  {
    slug: "air-pollution-monitoring-system",
    title: "Air Pollution Monitoring System",
    repo: "https://github.com/spatel842002/Air-Pollution-Monitoring-system",
    summary:
      "Cloud-connected IoT platform with sensor ingestion, MQTT, buffered event processing, alerting, and dashboards.",
    stack: ["Python", "MQTT", "React", "AWS IoT Core"],
    featured: true
  },
  {
    slug: "tesla-clone-app",
    title: "Tesla Clone App",
    repo: "https://github.com/spatel842002/Tesla-Clone-App",
    summary:
      "Full-stack EV discovery and commerce experience with catalog search, recommendations, and analytics.",
    stack: ["Next.js", "React", "PostgreSQL", "Prisma"],
    featured: true
  },
  // supporting projects
  {
    slug: "prediction-with-decision-tree",
    title: "Prediction with Decision Tree",
    repo: "https://github.com/spatel842002/Prediction-with-Decision-Tree",
    summary: "Explainable data-quality classification service with leakage-safe preprocessing and model comparison.",
    stack: ["Python", "scikit-learn", "FastAPI"]
  },
  {
    slug: "pan-fraud-detection",
    title: "PAN Fraud Detection",
    repo: "https://github.com/spatel842002/Pan-Fraud-Detection",
    summary: "Privacy-aware document authenticity screening with reproducible evaluation and asynchronous inference.",
    stack: ["Python", "TensorFlow", "FastAPI"]
  },
  {
    slug: "crop-yield-prediction",
    title: "Crop Yield Prediction",
    repo: "https://github.com/spatel842002/Crop-Yield-Prediction",
    summary: "Agricultural analytics and yield prediction combining climate and historical data for explainable models.",
    stack: ["Python", "Django", "pandas"]
  },
  {
    slug: "stock-market-price-prediction",
    title: "Stock Market Price Prediction",
    repo: "https://github.com/spatel842002/Stock-Market-Price-Prediction",
    summary: "Educational time-series forecasting comparing baselines with TensorFlow LSTM models.",
    stack: ["Python", "TensorFlow", "FastAPI"]
  },
  {
    slug: "world-happiness-report",
    title: "World Happiness Report",
    repo: "https://github.com/spatel842002/World-Happiness-Report",
    summary: "Full-stack global wellbeing analytics with multi-year ingestion and GraphQL aggregation.",
    stack: ["Python", "Flask", "GraphQL"]
  }
];
