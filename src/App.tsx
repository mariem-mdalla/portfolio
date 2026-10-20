import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Toolkit } from '@/components/sections/Toolkit';
import { Journey } from '@/components/sections/Journey';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text-main">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Toolkit />
          <Journey />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
