import { Header } from './components/header/Header';
import { Hero } from './components/Hero';
import { Panchang } from './components/panchang/Panchang';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { KundliPage } from './pages/KundliPage';

function App() {
  // In a real app, this would use proper routing
  const currentPage = window.location.pathname;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-26">
        {currentPage === '/kundli' ? (
          <KundliPage />
        ) : (
          <>
            <Hero />
            <Panchang />
            <Features />
            <Contact />
          </>
        )}
      </main>
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
             2024 VedicRishi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
