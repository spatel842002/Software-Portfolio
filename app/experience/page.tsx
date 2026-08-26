import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Experience(){
  return (
    <main>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <section className="mt-6">
          <h2 className="font-semibold">DXC Technology — Software Engineer</h2>
          <div className="text-sm text-muted">Arizona, USA · November 2024 – Present</div>
          <ul className="list-disc ml-6 mt-2 text-sm text-muted">
            <li>Engineered 7+ Python and Flask microservices for distributed data ingestion, transformation, validation, and business workflows.</li>
            <li>Built cloud data-processing pipelines using SQL Server, MongoDB, AWS SQS, S3, and Lambda to process ~20,000 records/day.</li>
            <li>Developed AI-powered product and supplier data-validation workflows using generative AI and anomaly detection.</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="font-semibold">Orion Technolab — Software Engineer</h2>
          <div className="text-sm text-muted">India · January 2021 – July 2023</div>
          <ul className="list-disc ml-6 mt-2 text-sm text-muted">
            <li>Built Java and Spring Boot microservices and REST APIs, improving average page-load performance by 30%.</li>
            <li>Refactored asynchronous backend services and optimized high-load database operations, reducing API response time by 50%.</li>
          </ul>
        </section>
      </section>
      <Footer />
    </main>
  )
}
