import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Profile } from './components/Profile';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { VideoFrames } from './components/VideoFrames';
import { Appointment } from './components/Appointment';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <VideoFrames />
              <Features />
              <Appointment />
              <Contact />
            </>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;