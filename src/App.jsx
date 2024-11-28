
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Organizers from './components/Organizers';
import Announcements from './components/Announcements';
import { Footer } from './components/Footer';

import Iupc from '../src/components/ Iupc';
import Blockchain from './components/Blockchain';
import ICTolym from './components/ICTolym';
import ProjectShow from './components/ProjectShow';
import Lfr from './components/Lfr';
import Soccorbot from './components/Soccorbot';
import Gratitude from './components/Gratitude';



const App = () => {
  return (
    <Router>
      <Navbar /> {/* Keep Navbar for general layout */}
      
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <main className="relative bg-slate-100 min-h-screen w-screen overflow-x-hidden">
              <Hero />
              <About />
              <Events /> {/* This will handle routing via buttons */}
              <Announcements />
              <Organizers />
              <Footer />
            </main>
          }
        />
        
        {/* Event-Specific Pages */}
        <Route path="/iupc" element={<Iupc />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/ict-olympiad" element={<ICTolym />} />
        <Route path="/project-show" element={<ProjectShow />} />
        <Route path="/lfr" element={<Lfr />} />
        <Route path="/soccer-bot" element={<Soccorbot />} />
        <Route path="/gratitude" element={<Gratitude />} />
      </Routes>
    </Router>
  );
};

export default App;
