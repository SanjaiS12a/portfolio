import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { Activity, Database, Cpu } from "lucide-react";

function Hero() {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: ["AI Engineer", "ML Developer", "Data Analyst", "Full Stack Developer"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  const [liveUsage, setLiveUsage] = useState(782.4);
  const [efficiency, setEfficiency] = useState(18.6);
  const [barHeights, setBarHeights] = useState([
    30, 45, 60, 40, 50, 75, 85, 90, 70, 50, 40, 60, 80, 95, 78, 65, 55, 45, 60, 78
  ]);

  // Simulate real-time data fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate usage
      setLiveUsage((prev) => {
        const delta = (Math.random() - 0.5) * 4;
        return parseFloat((prev + delta).toFixed(1));
      });

      // Fluctuate efficiency
      setEfficiency((prev) => {
        const delta = (Math.random() - 0.5) * 0.5;
        return parseFloat(Math.max(10, Math.min(30, prev + delta)).toFixed(1));
      });

      // Fluctuate bar heights for live prediction histogram
      setBarHeights((prev) =>
        prev.map((h) => {
          const delta = Math.floor((Math.random() - 0.5) * 15);
          return Math.max(15, Math.min(100, h + delta));
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen text-white bg-black relative overflow-hidden pt-24 pb-16 px-6 lg:px-12 grid-dots"
    >
      {/* Red Radial Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-cyber-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO TOP GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 pt-8">
          
          {/* LEFT COLUMN (TEXT INFO) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pulsing Badge */}
            <div className="flex items-center gap-3 border border-cyber-border px-4 py-2 rounded-xl w-fit bg-cyber-card/60 backdrop-blur-md shadow-glow-red">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-red"></span>
              </span>
              <div>
                <p className="text-[10px] text-cyber-red font-mono tracking-[0.2em] font-bold">AI & ML STUDENT</p>
                <p className="text-[9px] text-gray-500 font-mono">Building the future with AI</p>
              </div>
            </div>

            {/* Intro Header */}
            <div>
              <p className="text-cyber-red text-lg font-mono font-semibold tracking-widest mb-1">HI, I'M</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2">
                SANJAI S
              </h1>
              <h2 className="text-2xl md:text-4xl font-extrabold text-cyber-red tracking-wide text-glow-red">
                <span ref={typedRef}></span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 font-sans text-sm md:text-base max-w-xl leading-relaxed">
              I build intelligent systems that forecast, predict and empower. Passionate about AI,
              data analytics, and solving real-world problems through cutting-edge technology.
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#projects"
                className="group border border-cyber-red hover:bg-cyber-red text-white px-6 py-3.5 rounded-xl font-semibold text-xs tracking-widest flex items-center gap-3 transition-all duration-300 shadow-glow-red hover:shadow-[0_0_20px_rgba(255,0,60,0.4)]"
              >
                EXPLORE MY WORK
                <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="flex items-center gap-3">
                {[
                  { icon: <FaGithub />, link: "https://github.com/SanjaiS12a" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanjai-s-aba1b5378" },
                  { icon: <FaEnvelope />, link: "mailto:sanjaisaravanan984@gmail.com" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl border border-cyber-border bg-cyber-card/40 flex items-center justify-center text-gray-400 hover:text-cyber-red hover:border-cyber-red transition-all duration-300 shadow-glow-red-hover"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (AVATAR & SYSTEM CARD OVERLAYS) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative select-none">
            
            {/* Animated Target Rings behind profile */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-cyber-red/20 animate-spin-slow" />
              <div className="absolute w-[270px] h-[270px] md:w-[350px] md:h-[350px] rounded-full border border-cyber-red/30 animate-spin-reverse-slow" />
              <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-cyber-red/10" />
            </div>

            {/* Profile Avatar Box Wrapper */}
            <div className="flex flex-col items-center w-full relative z-10">
              <div className="relative w-[280px] h-[340px] md:w-[360px] md:h-[440px] rounded-3xl overflow-hidden border border-cyber-border bg-gradient-to-t from-cyber-red/20 to-transparent p-[1px] shadow-[0_0_40px_rgba(255,0,60,0.15)] shadow-glow-red">
                <img
                  src="/sanjai.png"
                  alt="Sanjai S"
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Lower Overlay Card on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-cyber-border rounded-xl p-3.5 flex items-center justify-between">
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-gray-400 font-bold tracking-wider">PREDICTING TODAY</p>
                    <p className="text-[10px] text-cyber-red font-bold tracking-wider">POWERING TOMORROW</p>
                  </div>
                  {/* Audio Wave Equalizer Visualizer */}
                  <div className="flex items-end gap-[3px] h-6">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] h-full bg-cyber-red rounded-t animate-equalizer"
                        style={{
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: `${0.6 + i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Float Forecast Telemetry Card below profile picture */}
            <div className="mt-8 relative z-10 bg-cyber-card/40 border border-cyber-border rounded-2xl p-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyber-card/60 backdrop-blur-md border border-cyber-border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-mono">Projects Built</p>
                  <h3 className="text-2xl font-black text-cyber-red">5</h3>
                </div>
                <div className="bg-cyber-card/60 backdrop-blur-md border border-cyber-border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-mono">GitHub Contributions</p>
                  <h3 className="text-2xl font-black text-cyber-red">100</h3>
                </div>
                <div className="bg-cyber-card/60 backdrop-blur-md border border-cyber-border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-mono">Certifications</p>
                  <h3 className="text-2xl font-black text-cyber-red">7</h3>
                </div>
                <div className="bg-cyber-card/60 backdrop-blur-md border border-cyber-border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-mono">Problems Solved</p>
                  <h3 className="text-2xl font-black text-cyber-red">150+</h3>
                </div>
              </div>

              {/* Mini Sparkline Chart SVG */}
              <svg className="w-full h-8 my-2 stroke-cyber-red fill-none" viewBox="0 0 100 30">
                <path
                  d="M0,25 Q15,5 30,22 T60,8 T90,20 L100,5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="shadow-glow-red"
                />
              </svg>
              
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 pt-1">
                <span>Model Status</span>
                <span className="text-cyber-red font-bold">ACTIVE</span>
              </div>
            </div>

          </div>

        </div>

        {/* HERO BOTTOM DASHBOARD PANELS */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          
          {/* CARD 1: ACADEMIC STANDINGS */}
          <div className="bg-cyber-card/65 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between min-h-[260px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyber-red/10 border border-cyber-red/30 flex items-center justify-center text-cyber-red shadow-[0_0_10px_rgba(255,0,60,0.2)]">
                <Activity size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-wider font-mono">ACADEMIC STANDINGS</h4>
                <p className="text-[9px] text-gray-500 font-mono">Kongu Engineering College</p>
              </div>
            </div>

            {/* Circular CGPA Progress Ring */}
            <div className="flex items-center gap-6 my-2">
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0 select-none">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    className="stroke-zinc-900 fill-none"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    className="stroke-cyber-red fill-none"
                    strokeWidth="5"
                    strokeDasharray="213.6"
                    strokeDashoffset={213.6 - (213.6 * 7.75) / 10}
                    style={{ filter: "drop-shadow(0 0 3px var(--color-cyber-red))" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute font-mono text-center">
                  <span className="text-sm font-black text-white">7.75</span>
                  <p className="text-[8px] text-gray-500">/ 10</p>
                </div>
              </div>

              <div className="font-mono text-xs space-y-1.5 text-gray-400">
                <p><span className="text-cyber-red font-bold">Degree:</span> B.Tech AI & ML</p>
                <p><span className="text-cyber-red font-bold">Timeline:</span> 2025 - Present</p>
                <p><span className="text-cyber-red font-bold">Standing:</span> Till 4th Sem</p>
              </div>
            </div>

            <div className="border-t border-cyber-border/55 pt-4 text-[10px] font-mono text-gray-500 text-center">
              Academic Telemetry // Verified Standing
            </div>
          </div>

          {/* CARD 2: SPECIALTY FOCUS */}
          <div className="bg-cyber-card/65 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between min-h-[260px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyber-red/10 border border-cyber-red/30 flex items-center justify-center text-cyber-red shadow-[0_0_10px_rgba(255,0,60,0.2)]">
                <Database size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-wider font-mono">SPECIALTY FOCUS</h4>
                <p className="text-[9px] text-gray-500 font-mono">Domain Proficiency</p>
              </div>
            </div>

            {/* Skill Progress Indicators */}
            <div className="space-y-3 font-mono text-[10px] text-gray-400 my-2">
              {[
                { name: "Machine Learning", level: "85%" },
                { name: "Web Development", level: "80%" },
                { name: "Systems C Program", level: "85%" },
                { name: "Data Engineering", level: "75%" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <span>{item.name}</span>
                    <span className="text-cyber-red font-bold">{item.level}</span>
                  </div>
                  <div className="w-full h-1 bg-black/60 rounded-full border border-cyber-border/30 overflow-hidden">
                    <div
                      className="h-full bg-cyber-red shadow-[0_0_4px_var(--color-cyber-red)]"
                      style={{ width: item.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-cyber-border/55 pt-3 text-center text-[9px] font-mono text-gray-500">
              Pipeline capabilities fully operational
            </div>
          </div>

          {/* CARD 3: MODEL TELEMETRY */}
          <div className="bg-cyber-card/65 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between min-h-[260px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyber-red/10 border border-cyber-red/30 flex items-center justify-center text-cyber-red shadow-[0_0_10px_rgba(255,0,60,0.2)]">
                <Cpu size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-wider font-mono">MODEL TELEMETRY</h4>
                <p className="text-[9px] text-gray-500 font-mono">Water Consumption Prediction</p>
              </div>
            </div>

            {/* Grid of Key Model Metrics */}
            <div className="grid grid-cols-2 gap-3 font-mono text-center my-2">
              <div className="bg-black/35 border border-cyber-border/40 rounded-xl p-2.5">
                <span className="text-xs text-gray-500 block uppercase">Accuracy</span>
                <span className="text-sm font-black text-cyber-red text-glow-red">86.2%</span>
              </div>
              <div className="bg-black/35 border border-cyber-border/40 rounded-xl p-2.5">
                <span className="text-xs text-gray-500 block uppercase">Latency</span>
                <span className="text-sm font-black text-white">&lt; 45ms</span>
              </div>
              <div className="bg-black/35 border border-cyber-border/40 rounded-xl p-2.5">
                <span className="text-xs text-gray-500 block uppercase">Epochs</span>
                <span className="text-sm font-black text-white">150</span>
              </div>
              <div className="bg-black/35 border border-cyber-border/40 rounded-xl p-2.5">
                <span className="text-xs text-gray-500 block uppercase">Validation</span>
                <span className="text-sm font-black text-cyber-red text-glow-red">95%</span>
              </div>
            </div>

            <div className="border-t border-cyber-border/55 pt-3 text-[9px] font-mono text-gray-500 text-center">
              Telemetry verified for release
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;