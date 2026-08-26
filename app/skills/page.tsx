import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Skills(){
  const groups = [
    {title:'Languages', items:['Python','Java','TypeScript','JavaScript','SQL','C#']},
    {title:'Backend & APIs', items:['Spring Boot','Flask','FastAPI','Django','Node.js','GraphQL']},
    {title:'Cloud & Infra', items:['AWS','Azure','Docker','Kubernetes','Terraform']},
    {title:'Distributed Systems', items:['Kafka','Event-driven','Redis','SQS','Streams']},
    {title:'AI/ML', items:['PyTorch','TensorFlow','LangChain','RAG','Embeddings']}
  ];
  return (
    <main>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {groups.map(g=> (
            <div key={g.title}>
              <h3 className="font-semibold">{g.title}</h3>
              <div className="text-sm text-muted mt-2">{g.items.join(' · ')}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
