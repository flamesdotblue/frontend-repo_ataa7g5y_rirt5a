import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'Lohit Satya Sai | Flutter Developer';
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar />
      <main>
        <Hero />
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
}
