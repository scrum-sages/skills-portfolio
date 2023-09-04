import { useRef } from 'react';
import './App.css';
import { ContactSection } from './components/ContactSection';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Team from './components/Team';

function App() {
  const navRefs = {
    team: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  return (
    <>
      <Header navRefs={navRefs} />
      <Hero contactRef={navRefs.contact} />
      <Team navRef={navRefs.team} />
      <Skills navRef={navRefs.skills} />
      <ContactSection navRef={navRefs.contact} />
      <Footer />
    </>
  );
}

export default App;
