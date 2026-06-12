import { ArrowUpRight } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      items: ["Python", "Java", "C", "JavaScript"],
    },
    {
      title: "AI/ML",
      items: ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "OpenCV"],
    },
    {
      title: "Data Analytics",
      items: ["SQL", "MySQL", "Power BI", "Excel", "Data Visualization"],
    },
    {
      title: "Web Development",
      items: ["React", "Node.js", "MongoDB", "HTML", "CSS"],
    },
  ];

  return (
    <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-6 shadow-glow-red hover:shadow-glow-red-hover hover:border-cyber-border-active transition-all duration-300 flex flex-col justify-between h-full">
      <h4 className="text-xs font-bold tracking-wider font-mono text-gray-400 mb-6 uppercase">SKILL SET</h4>
      {skillGroups.map((group, idx) => (
        <div key={idx} className="mb-4">
          <h5 className="text-sm font-medium text-cyber-red mb-2">{group.title}</h5>
          <ul className="grid grid-cols-3 gap-2">
            {group.items.map((tech, i) => (
              <li key={i} className="text-[10px] font-mono text-gray-500 text-center">{tech}</li>
            ))}
          </ul>
        </div>
      ))}
      <a href="#skills-all" className="group flex items-center gap-1.5 text-cyber-red hover:text-cyber-red-hover font-mono text-[10px] tracking-widest font-bold mt-6 border-t border-cyber-border/40 pt-4">
        VIEW ALL SKILLS
        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default Skills;
