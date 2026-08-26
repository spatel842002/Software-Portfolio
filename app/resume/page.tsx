import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Resume(){
  const pdfPath = '/Shriya_Patel_Resume.pdf';
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Resume</h1>
        <p className="text-muted mt-2">Download or view the official resume PDF.</p>
        <div className="mt-6 flex gap-4">
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded">View PDF</a>
          <a href={pdfPath} download="Shriya_Patel_Resume.pdf" className="px-4 py-2 border rounded">Download Resume</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
