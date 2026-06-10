import { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, Play } from "lucide-react";

function Terminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "SYSTEM STATUS: ACTIVE // COMPILE SUCCESSFUL" },
    { type: "system", text: "INITIALIZING SANJAI_CORE_OS V2.4.0..." },
    { type: "system", text: "PARSING ACADEMIC AND TECHNICAL DATA..." },
    { type: "system", text: "ALL SYSTEMS NOMINAL. TYPE 'help' FOR AVAILABLE CHANNELS." }
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  const commands = {
    help: "Available commands: [about, education, skills, projects, clear]",
    about: "SANJAI S - Artificial Intelligence and Machine Learning Student. Passionate about LLMs, data telemetry, and system-level applications.",
    education: "1. B.Tech AI & ML @ Kongu Engineering College (7.75 CGPA) | 2. HSC @ Vidya Mandir (75%) | 3. SSLC @ Vidya Mandir",
    skills: "Core technical capabilities: Python, C Programming, JavaScript, MongoDB, HTML & CSS, Git & GitHub.",
    projects: "1. Personalized Healthcare using LLM (AI/ML) | 2. Real-Time Chat Queue in C (Systems & C Code)"
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `sanjai_OS:~ visitor$ ${input}` }];

    if (cmd === "clear") {
      setHistory([]);
    } else if (commands[cmd]) {
      newHistory.push({ type: "output", text: commands[cmd] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: "error", text: `Command not found: '${cmd}'. Type 'help' for options.` });
      setHistory(newHistory);
    }

    setInput("");
  };

  // Auto-scroll to bottom of terminal when history changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section id="terminal" className="py-20 bg-black relative border-t border-cyber-border/40 grid-dots px-6 lg:px-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-8 text-center">
          <span className="text-[10px] text-cyber-red font-mono tracking-[0.2em] font-bold">INTERACTIVE DEPLOYMENT</span>
          <h2 className="text-3xl font-extrabold tracking-wide text-white mt-1">
            SYSTEM <span className="text-cyber-red">CONSOLE</span>
          </h2>
        </div>

        {/* Terminal Box */}
        <div className="bg-black/90 border border-cyber-border rounded-2xl overflow-hidden shadow-glow-red hover:border-cyber-border-active transition-all duration-300">
          
          {/* Header Bar */}
          <div className="bg-zinc-900/60 border-b border-cyber-border px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TermIcon size={14} className="text-cyber-red" />
              <span className="text-[10px] font-mono text-gray-400 tracking-wider">sanjaisaravanan@core-OS: ~</span>
            </div>
            
            {/* Red / Yellow / Green Window Controls */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyber-red/30 border border-cyber-red/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="h-64 p-6 overflow-y-auto font-mono text-xs space-y-2.5 scrollbar-thin select-text">
            {history.map((line, idx) => (
              <div
                key={idx}
                className={`
                  ${line.type === "system" ? "text-gray-500" : ""}
                  ${line.type === "user" ? "text-white font-bold" : ""}
                  ${line.type === "output" ? "text-cyber-red text-glow-red" : ""}
                  ${line.type === "error" ? "text-yellow-500" : ""}
                `}
              >
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Form Input */}
          <form onSubmit={handleCommand} className="border-t border-cyber-border bg-black flex items-center px-4 py-3">
            <Play size={10} className="text-cyber-red shrink-0 mr-2" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent text-xs text-white focus:outline-none font-mono"
              placeholder="Type command (try 'help')..."
              autoComplete="off"
              autoFocus
            />
          </form>
        </div>

      </div>
    </section>
  );
}

export default Terminal;
