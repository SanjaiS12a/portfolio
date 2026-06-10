import { FaPython, FaCode, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

function Skills() {
  const stack = [
    { name: "Python", icon: <FaPython size={32} className="text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" /> },
    { name: "C Programming", icon: <FaCode size={30} className="text-cyan-400 group-hover:text-cyan-350 transition-colors duration-300" /> },
    { name: "JavaScript", icon: <SiJavascript size={30} className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" /> },
    { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-500 group-hover:text-green-400 transition-colors duration-300" /> },
    { name: "HTML & CSS", icon: <div className="flex gap-1"><FaHtml5 size={26} className="text-orange-500" /><FaCss3Alt size={26} className="text-blue-500" /></div> },
    { name: "GitHub", icon: <FaGithub size={32} className="text-white group-hover:text-gray-300 transition-colors duration-300" /> }
  ];

  return (
    <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <h4 className="text-xs font-bold tracking-wider font-mono text-gray-400 mb-6 uppercase">TECH STACK</h4>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4">
          {stack.map((tech, idx) => (
            <div
              key={idx}
              className="group bg-black/40 border border-cyber-border/70 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-cyber-red/50 hover:shadow-[0_0_15px_rgba(255,0,60,0.15)] transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-108">
                {tech.icon}
              </div>
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-white transition-colors duration-300 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* View All */}
      <a
        href="#skills-all"
        className="group flex items-center gap-1.5 text-cyber-red hover:text-cyber-red-hover font-mono text-[10px] tracking-widest font-bold mt-6 border-t border-cyber-border/40 pt-4"
      >
        VIEW ALL SKILLS
        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default Skills;
