import type { Metadata } from 'next';
import { Boxes, Cloud, Cpu, Database, GitBranch, Layers, Sparkles, TestTube } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Skills'
};

const GROUPS = [
  {
    icon: Sparkles,
    title: 'AI / LLM & GenAI',
    items: ['Generative AI', 'LLM Applications', 'AI-Powered Data Validation', 'RAG Pipelines', 'LangChain', 'Vector Databases', 'Embeddings', 'Semantic Search', 'NLP', 'Prompt Engineering']
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Computer Vision', 'ML Systems Engineering', 'MLflow']
  },
  {
    icon: Boxes,
    title: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C#']
  },
  {
    icon: Layers,
    title: 'Backend & APIs',
    items: ['Spring Boot', 'Flask', 'FastAPI', 'Django', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'OAuth2', 'JWT']
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'AKS', 'Terraform', 'Serverless', 'AWS Lambda', 'Azure Functions', 'EC2', 'S3', 'SQS', 'Blob Storage']
  },
  {
    icon: GitBranch,
    title: 'Distributed Systems',
    items: ['Apache Kafka', 'Event-Driven Architecture', 'Message Queues', 'Stream Processing', 'Asynchronous Processing', 'Redis Pub/Sub', 'Data Ingestion', 'Data Transformation']
  },
  {
    icon: Database,
    title: 'Databases & Search',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'DynamoDB', 'Elasticsearch', 'Query Optimization', 'Indexing']
  },
  {
    icon: Cpu,
    title: 'DevOps & Observability',
    items: ['GitHub Actions', 'Jenkins', 'CI/CD', 'Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'Distributed Tracing', 'Azure Monitor', 'Application Insights']
  },
  {
    icon: TestTube,
    title: 'Testing',
    items: ['PyTest', 'JUnit', 'Jest', 'TDD', 'Unit Testing', 'Integration Testing', 'CI-Based Test Automation']
  }
];

export default function Skills() {
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Skills</h1>
        <p className="mt-3 max-w-2xl text-muted">Technologies and practices across backend, cloud, data, and applied AI.</p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center gap-2.5">
                <group.icon size={18} className="text-accent-600" />
                <h2 className="font-display font-semibold">{group.title}</h2>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
