import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievement from "./components/Achievement";
import GithubStats from "./components/GithubStats";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen text-white select-none">
      <Navbar />
      
      {/* Home Section (Hero & Dashboard) */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Bottom Grid (Skills, Achievements, GitHub Stats) */}
      <section className="py-24 bg-black relative border-t border-cyber-border/40 grid-dots px-6 lg:px-12">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch relative z-10">
          <div id="skills">
            <Skills />
          </div>
          <div id="achievements">
            <Achievement />
          </div>
          <div>
            <GithubStats />
          </div>
        </div>
      </section>

      {/* Interactive Terminal System */}
      <Terminal />
      
      {/* Contact Section */}
      <Contact />

      {/* Cyberpunk Footer bar */}
      <footer className="py-8 bg-black border-t border-cyber-border/30 text-center text-xs font-mono text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SANJAI S. ALL SYSTEMS NOMINAL.</p>
          <p className="text-[10px] text-cyber-red tracking-wider">DESIGNED & ENGINEERED FOR THE FUTURE</p>
        </div>
      </footer>
    </div>
  );
}

export default App;