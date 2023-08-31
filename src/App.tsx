import './App.css';
import { ContactSection } from './components/ContactSection';

import { Header } from './components/Header';
import Skills from './components/Skills';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <ContactSection></ContactSection>
      <Header />
      <Team />
      <Skills />
    </>
  );
}

export default App;
