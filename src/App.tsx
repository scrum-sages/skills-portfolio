import './App.css';
import { ContactSection } from './components/ContactSection';
import Footer from './components/Footer';

import { Header } from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <Team />
      <Projects />
      <Skills />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
