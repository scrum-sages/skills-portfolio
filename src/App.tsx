import './App.css';
import { ContactSection } from './components/ContactSection';

import { Header } from './components/Header';
import Skills from './components/Skills';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header></Header>
      <Team />
      <Skills></Skills>
      <ContactSection></ContactSection>
      <Header />
    </>
  );
}

export default App;
