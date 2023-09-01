import './App.css';
import { ContactSection } from './components/ContactSection';

import { Header } from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <Skills />
      <ContactSection />
    </>
  );
}

export default App;
