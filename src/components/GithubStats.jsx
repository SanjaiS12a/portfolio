import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

function GithubStats() {
  const [gridData, setGridData] = useState([]);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate random but structured contribution history (24 weeks, 7 days)
  useEffect(() => {
    const data = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    
    for (let col = 0; col < 24; col++) {
      const colData = [];
      for (let row = 0; row < 7; row++) {
        // Bias towards 0-1 (empty/low), with occasional active clusters (2-4)
        const rand = Math.random();
        let level = 0;
        if (rand > 0.85) level = 4; // Neon Red
        else if (rand > 0.7) level = 3; // Bright Red
        else if (rand > 0.5) level = 2; // Medium Red
        else if (rand > 0.25) level = 1; // Dark Red
        
        const count = level === 0 ? 0 : Math.floor(Math.random() * level * 3) + 1;
        colData.push({ level, count, date: `Week ${col + 1}, Day ${row + 1}` });
      }
      data.push(colData);
    }
    setGridData(data);
  }, []);

  const getCellColor = (level) => {
    switch (level) {
      case 4: return "bg-cyber-red shadow-[0_0_8px_var(--color-cyber-red)]";
      case 3: return "bg-red-600";
      case 2: return "bg-red-800/80";
      case 1: return "bg-red-950/70";
      default: return "bg-zinc-900 border border-zinc-950";
    }
  };

  return (
    <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between h-full relative">
      <div>
        {/* Title */}
        <h4 className="text-xs font-bold tracking-wider font-mono text-gray-400 mb-4 uppercase">GITHUB STATS</h4>

        {/* Heatmap Months Header */}
        <div className="flex justify-between text-[9px] font-mono text-gray-500 px-1 mb-1.5 select-none">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>

        {/* Calendar Heatmap Grid */}
        <div className="h-28 bg-black/40 border border-cyber-border/45 rounded-xl p-3.5 flex justify-between gap-[3px] overflow-x-auto relative">
          {gridData.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3px]">
              {week.map((day, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-[7px] h-[7px] rounded-[1px] transition-all duration-200 cursor-pointer ${getCellColor(day.level)} hover:scale-125`}
                  onMouseEnter={() => setHoveredCell(day)}
                  onMouseLeave={() => setHoveredCell(null)}
                />
              ))}
            </div>
          ))}

          {/* Interactive Tooltip popup on cell hover */}
          {hoveredCell && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black border border-cyber-border text-white text-[8px] font-mono py-1 px-2.5 rounded shadow-glow-red pointer-events-none whitespace-nowrap">
              {hoveredCell.count} contributions on {hoveredCell.date}
            </div>
          )}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-3 gap-2 border-t border-cyber-border/40 mt-5 pt-4 text-center select-none">
          <div>
            <h5 className="text-base font-black font-mono text-white">478</h5>
            <p className="text-[9px] text-gray-500 font-mono mt-0.5">Contributions</p>
          </div>
          <div>
            <h5 className="text-base font-black font-mono text-white">24</h5>
            <p className="text-[9px] text-gray-500 font-mono mt-0.5">Repositories</p>
          </div>
          <div>
            <h5 className="text-base font-black font-mono text-white">93</h5>
            <p className="text-[9px] text-gray-500 font-mono mt-0.5">Commits</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <a
        href="https://github.com/SanjaiS12a"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-1.5 text-cyber-red hover:text-cyber-red-hover font-mono text-[10px] tracking-widest font-bold mt-6 border-t border-cyber-border/40 pt-4"
      >
        VIEW GITHUB PROFILE
        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default GithubStats;
