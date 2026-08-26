export type Project = {
  slug: string;
  title: string;
  repo: string;
  summary: string;
  description: string;
  highlights: string[];
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
    description:
      "A self-hosted engineering assistant for secure repository ingestion, AST-based code indexing, and hybrid retrieval. Supports RAG-grounded codebase Q&A, defect investigation, patch proposals, test generation, and human-reviewed agent workflows.",
    highlights: [
      "AST-based code indexing with hybrid (vector + keyword) retrieval over Qdrant",
      "RAG-grounded Q&A, defect investigation, and patch proposals with human review gates",
      "Background task orchestration with Celery and Redis, containerized end-to-end"
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Celery", "Qdrant", "Ollama", "LangChain", "Docker"],
    featured: true
  },
  {
    slug: "realtime-chat-app",
    title: "Real-Time Chat App",
    repo: "https://github.com/spatel842002/Realtime-Chat-App",
    summary:
      "Production-oriented messaging platform with presence, delivery receipts, media, WebRTC, and event-driven integrations.",
    description:
      "A production-oriented messaging platform with direct and group chat, presence, delivery and read receipts, media sharing, and WebRTC voice/video calls, backed by distributed caching and event-driven integrations.",
    highlights: [
      "WebRTC voice/video calling alongside real-time messaging via Socket.io",
      "Presence, delivery and read receipts with Redis-backed distributed caching",
      "Event-driven integrations through Azure Service Bus with privacy controls"
    ],
    stack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Redis", "WebRTC", "Azure Service Bus", "Docker"],
    featured: true
  },
  {
    slug: "online-grocery-mart",
    title: "Online Grocery Mart",
    repo: "https://github.com/spatel842002/Online-Grocery-Mart",
    summary:
      "Cloud-native commerce platform with catalog, inventory, GraphQL aggregation, Kafka-based order events, and observability.",
    description:
      "A cloud-native commerce platform with catalog, inventory, identity, and order services, a GraphQL aggregation layer, Kafka-based order events, distributed caching, search, and an observable containerized deployment.",
    highlights: [
      "GraphQL aggregation layer unifying catalog, inventory, identity, and order microservices",
      "Kafka-based order events for asynchronous, decoupled service communication",
      "Elasticsearch-backed product search with Redis caching, deployed on Kubernetes"
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "GraphQL", "MySQL", "Redis", "Kafka", "Elasticsearch", "Kubernetes"],
    featured: true
  },
  {
    slug: "3d-object-detection-system",
    title: "3D Object Detection System",
    repo: "https://github.com/spatel842002/3D-Object-Detection-system",
    summary:
      "Computer-vision inference system combining object detection, depth estimation, tracking, and camera calibration.",
    description:
      "A computer-vision inference system combining object detection, monocular depth estimation, tracking, and camera calibration to estimate object distance and approximate three-dimensional position.",
    highlights: [
      "YOLO-based detection fused with monocular depth estimation for distance approximation",
      "Multi-object tracking with camera calibration for consistent 3D position estimates",
      "MLflow-tracked experiments served through a FastAPI inference endpoint on AWS"
    ],
    stack: ["Python", "PyTorch", "OpenCV", "YOLO", "FastAPI", "MLflow", "AWS EC2", "S3", "Docker"],
    featured: true
  },
  {
    slug: "air-pollution-monitoring-system",
    title: "Air Pollution Monitoring System",
    repo: "https://github.com/spatel842002/Air-Pollution-Monitoring-system",
    summary:
      "Cloud-connected IoT platform with sensor ingestion, MQTT, buffered event processing, alerting, and dashboards.",
    description:
      "A cloud-connected IoT platform with Raspberry Pi sensor ingestion, MQTT control, buffered event processing, alerting, telemetry persistence, live dashboards, and a hardware-free simulator for local development.",
    highlights: [
      "MQTT-based ingestion from Raspberry Pi sensors with buffered, fault-tolerant event processing",
      "AWS IoT Core, SQS, and DynamoDB pipeline for telemetry persistence and alerting",
      "Hardware-free simulator so the full pipeline can be exercised without physical sensors"
    ],
    stack: ["Python", "C#", "ASP.NET Core", "React", "AWS IoT Core", "MQTT", "SQS", "DynamoDB", "S3", "Redis"],
    featured: true
  },
  {
    slug: "tesla-clone-app",
    title: "Tesla Clone App",
    repo: "https://github.com/spatel842002/Tesla-Clone-App",
    summary:
      "Full-stack EV discovery and commerce experience with catalog search, recommendations, and analytics.",
    description:
      "A full-stack electric-vehicle discovery and commerce experience with catalog search, recommendations, vehicle configuration, saved builds, customer inquiries, administration, and analytics.",
    highlights: [
      "Vehicle configurator with saved builds backed by Prisma and PostgreSQL",
      "Auth.js-based authentication with Redis-backed session and cache layers",
      "OpenTelemetry instrumentation for end-to-end request tracing"
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Redis", "AWS S3", "OpenTelemetry"],
    featured: true
  },
  {
    slug: "prediction-with-decision-tree",
    title: "Prediction with Decision Tree",
    repo: "https://github.com/spatel842002/Prediction-with-Decision-Tree",
    summary: "Explainable data-quality classification service with leakage-safe preprocessing and model comparison.",
    description:
      "An explainable data-quality classification service for validating supplier and product records, with leakage-safe preprocessing, model comparison, feature explanations, and API-based inference.",
    highlights: [
      "Leakage-safe preprocessing pipeline with train/test isolation",
      "Decision Tree vs. Random Forest comparison with SHAP-based feature explanations",
      "MLflow experiment tracking served via a FastAPI inference endpoint"
    ],
    stack: ["Python", "pandas", "scikit-learn", "Decision Tree", "Random Forest", "SHAP", "MLflow", "FastAPI", "Docker"]
  },
  {
    slug: "pan-fraud-detection",
    title: "PAN Fraud Detection",
    repo: "https://github.com/spatel842002/Pan-Fraud-Detection",
    summary: "Privacy-aware document authenticity screening with reproducible evaluation and asynchronous inference.",
    description:
      "A privacy-aware document authenticity screening service using transfer learning, reproducible image evaluation, visual explanations, secure uploads, and asynchronous cloud inference.",
    highlights: [
      "Transfer-learning classifier for document authenticity with visual explanation overlays",
      "Secure upload handling with asynchronous inference via AWS Lambda and SQS",
      "Reproducible evaluation pipeline tracked with MLflow"
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI", "MLflow", "AWS Lambda", "S3", "SQS", "DynamoDB"]
  },
  {
    slug: "crop-yield-prediction",
    title: "Crop Yield Prediction",
    repo: "https://github.com/spatel842002/Crop-Yield-Prediction",
    summary: "Agricultural analytics and yield prediction combining climate and historical data for explainable models.",
    description:
      "An agricultural analytics and yield-prediction platform combining climate, rainfall, pesticide, crop, geographic, and historical data with explainable regression models.",
    highlights: [
      "Regression models over combined climate, rainfall, and historical yield data",
      "Explainable outputs for feature-level attribution on yield estimates",
      "Serverless scheduled data refresh via Azure Functions and Blob Storage"
    ],
    stack: ["Python", "Django", "pandas", "scikit-learn", "PostgreSQL", "MLflow", "Azure Functions", "Blob Storage"]
  },
  {
    slug: "stock-market-price-prediction",
    title: "Stock Market Price Prediction",
    repo: "https://github.com/spatel842002/Stock-Market-Price-Prediction",
    summary: "Educational time-series forecasting comparing baselines with TensorFlow LSTM models.",
    description:
      "An educational time-series forecasting system comparing naive baselines with a TensorFlow LSTM through chronological evaluation, experiment tracking, and API-based inference.",
    highlights: [
      "Chronological train/test splits to avoid look-ahead bias in evaluation",
      "LSTM vs. naive-baseline comparison with MLflow experiment tracking",
      "FastAPI inference endpoint with Redis-cached predictions"
    ],
    stack: ["Python", "TensorFlow", "pandas", "NumPy", "FastAPI", "MLflow", "AWS S3", "Redis", "Docker"]
  },
  {
    slug: "world-happiness-report",
    title: "World Happiness Report",
    repo: "https://github.com/spatel842002/World-Happiness-Report",
    summary: "Full-stack global wellbeing analytics with multi-year ingestion and GraphQL aggregation.",
    description:
      "A full-stack global wellbeing analytics platform with multi-year data ingestion, GraphQL aggregation, country comparisons, ranking analysis, and interactive trend exploration.",
    highlights: [
      "Multi-year dataset ingestion normalized across SQL Server and MongoDB",
      "GraphQL aggregation layer powering country comparisons and rankings",
      "Interactive Plotly visualizations for trend exploration over time"
    ],
    stack: ["Python", "Flask", "GraphQL", "SQL Server", "MongoDB", "React", "TypeScript", "Plotly", "Docker"]
  }
];
