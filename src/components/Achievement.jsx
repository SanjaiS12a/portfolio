import { BrainCircuit, Cpu, Settings, Award } from "lucide-react";

function Achievement() {
  const achievementsList = [
    {
      title: "AI Project Developer",
      desc: "Personalized Healthcare LLM",
      icon: <BrainCircuit size={16} />
    },
    {
      title: "Inplant Training Graduate",
      desc: "NXTGEN Instrument (Erode)",
      icon: <Settings size={16} />
    },
    {
      title: "Certified Programmer",
      desc: "Advanced C Programming",
      icon: <Cpu size={16} />
    },
    {
      title: "HDCA Certified",
      desc: "Honours Diploma in Computer App",
      icon: <Award size={16} />
    }
  ];

  return (
    <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <h4 className="text-xs font-bold tracking-wider font-mono text-gray-400 mb-6 uppercase">ACHIEVEMENTS</h4>

        {/* List */}
        <div className="space-y-5">
          {achievementsList.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              {/* Hexagon/Shield Outlined Container */}
              <div className="relative w-10 h-10 flex items-center justify-center text-cyber-red">
                {/* SVG Hexagon Outline background */}
                <svg className="absolute inset-0 w-full h-full stroke-cyber-border group-hover:stroke-cyber-red transition-colors duration-300 fill-black/60 shadow-[inset_0_0_10px_rgba(255,0,60,0.1)]" viewBox="0 0 40 40">
                  <path
                    d="M20,2 L35,10 L35,30 L20,38 L5,30 L5,10 Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Icon */}
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="font-mono">
                <h5 className="text-xs font-bold text-white group-hover:text-cyber-red transition-colors duration-300">
                  {item.title}
                </h5>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual bottom accent line */}
      <div className="border-t border-cyber-border/40 pt-4 mt-6 flex items-center justify-between text-[9px] font-mono text-gray-500">
        <span>Verified Credentials</span>
        <span className="text-cyber-red font-bold">100% SECURE</span>
      </div>
    </div>
  );
}

export default Achievement;
