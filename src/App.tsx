import './App.css';
import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Skills></Skills>
        <ContactSection></ContactSection>
      </div>
    </>
  );
}

export default App;
