import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Experience'
};

const ROLES = [
  {
    company: 'DXC Technology',
    role: 'Software Engineer',
    location: 'Arizona, USA',
    period: 'November 2024 – Present',
    bullets: [
      'Engineered 7+ Python and Flask microservices supporting data ingestion, transformation, validation, and business workflows across distributed services.',
      'Built cloud-based data-processing pipelines using SQL Server, MongoDB, AWS SQS, S3, and AWS Lambda to process, validate, and route approximately 20,000 records per day.',
      'Developed AI-powered data validation workflows for product and supplier data, applying generative AI techniques and automated anomaly detection to improve data quality and reduce manual review.',
      'Designed backend APIs and asynchronous workflows for AI-enabled data processing, emphasizing validation, error handling, reliable data flow, and distributed service integration.',
      'Built a GraphQL aggregation layer across SQL Server and MongoDB-backed microservices, consolidating data access and reducing page load times by 60%.',
      'Automated serverless data validation and cleansing with AWS Lambda and containerized services with Docker for consistent deployment across development, staging, and production.',
      'Improved service reliability through PyTest-based automated testing, mocks, and stubs; automated builds, tests, and deployments with Jenkins CI/CD.',
      'Developed Python automation for database maintenance and deployment workflows, saving more than 3 engineering hours per week.'
    ]
  },
  {
    company: 'Orion Technolab',
    role: 'Software Engineer',
    location: 'India',
    period: 'January 2021 – July 2023',
    bullets: [
      'Built and maintained Java and Spring Boot microservices and REST APIs for production applications, improving average page load times by 30% through optimized API response handling.',
      'Refactored critical backend services for asynchronous processing and optimized high-load database operations, reducing average API response times by 50%.',
      'Redesigned MySQL schemas, indexes, and high-volume SQL queries to improve query performance, data consistency, and scalability.',
      'Migrated and operated application infrastructure on Microsoft Azure using Virtual Machines, Blob Storage, and Azure Functions, reducing monthly infrastructure costs by 25%.',
      'Implemented event-driven processing with Azure Functions, enabling scalable asynchronous handling of application and data-processing workloads.',
      'Established automated CI/CD workflows with GitHub Actions and production observability with Azure Monitor and Application Insights, supporting 98%+ uptime for production releases.',
      'Collaborated across frontend, backend, and cloud engineering teams using Agile/Scrum, JIRA, and Git to deliver distributed applications.'
    ]
  }
];

export default function Experience() {
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Backend and cloud engineering across data-heavy, event-driven systems.
        </p>

        <div className="mt-10 space-y-10 border-l border-border pl-8">
          {ROLES.map((role) => (
            <div key={role.company} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500" />
              <h2 className="font-display text-lg font-semibold">
                {role.company} <span className="text-muted">· {role.role}</span>
              </h2>
              <div className="mt-1 text-sm text-muted">
                {role.location} · {role.period}
              </div>
              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
