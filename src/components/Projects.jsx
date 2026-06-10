import { ArrowUpRight } from "lucide-react";

function Projects() {
  const projectList = [
    {
      title: "Water Consumption Prediction",
      description: "ML and deep learning framework forecasting daily water demand with MLP, GRU, and LSTM models, plus a Streamlit dashboard for interactive scenario planning.",
      image: "/energy_chart.png",
      tag: "AI / ML",
      link: "https://github.com/SanjaiS12a/waterconsumptionprediction"
    },
    {
      title: "NeetCode Submissions",
      description: "Curated collection of NeetCode.io problem solutions synced via GitHub, organized by topic with solutions in Java and other languages.",
      image: "/planet.png",
      tag: "DSA / Java",
      link: "https://github.com/SanjaiS12a/neetcode-submissions"
    },
    {
      title: "Developer Portfolio",
      description: "Interactive React portfolio showcasing projects, skills, and achievements with a cyber-themed UI, terminal interface, and GitHub stats.",
      image: "/galaxy.png",
      tag: "WEB APP",
      link: "https://github.com/SanjaiS12a/portfolio"
    },
    {
      title: "Real-Time Chat Queue in C",
      description: "Developed a real-time chat queue system in C to manage customer requests efficiently with dynamic assignment, logging, and queue management.",
      image: "/black_hole.png",
      tag: "C Programming",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black relative border-t border-cyber-border/40 grid-dots px-6 lg:px-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[10px] text-cyber-red font-mono tracking-[0.2em] font-bold">PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white mt-1">
              FEATURED <span className="text-cyber-red">PROJECTS</span>
            </h2>
          </div>
          
          <a
            href="https://github.com/SanjaiS12a"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 text-cyber-red hover:text-cyber-red-hover font-mono text-xs tracking-wider font-bold transition-colors duration-300"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="group bg-cyber-card/50 backdrop-blur-sm border border-cyber-border rounded-2xl overflow-hidden hover:border-cyber-border-active transition-all duration-500 shadow-glow-red hover:shadow-glow-red-hover flex flex-col h-full"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden border-b border-cyber-border bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-sm md:text-base group-hover:text-cyber-red transition-colors duration-300 line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[9px] text-cyber-red bg-cyber-red/5 border border-cyber-red/20 px-2.5 py-1 rounded font-mono font-bold tracking-widest uppercase">
                    {project.tag}
                  </span>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-cyber-red/10 border border-cyber-red/35 flex items-center justify-center text-cyber-red group-hover:bg-cyber-red group-hover:text-white transition-all duration-300"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
