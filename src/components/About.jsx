import { GraduationCap, Trophy, Cpu, User, FileBadge, Settings } from "lucide-react";

function About() {
  const education = [
    {
      degree: "B.Tech Artificial Intelligence and Machine Learning",
      institution: "Kongu Engineering College (Perundurai, Erode)",
      duration: "2025 – Present",
      grade: "CGPA: 7.75 (Till 4th Semester)"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Vidya Mandir Matric Hr Sec School (Tirupur)",
      duration: "2023 – 2024",
      grade: "Percentage: 75%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Vidya Mandir Matric Hr Sec School (Tirupur)",
      duration: "2021 – 2022",
      grade: "Completed"
    }
  ];

  const trainingAndCertifications = [
    {
      title: "NXTGEN Instrument Inplant Training",
      desc: "7 Days intensive industrial applications and instrumentation systems training in Erode.",
      icon: <Settings size={18} className="text-cyber-red" />
    },
    {
      title: "Advanced C Programming",
      desc: "Course Certification in advanced data structures and algorithm design.",
      icon: <FileBadge size={18} className="text-cyber-red" />
    },
    {
      title: "Honours Diploma in Computer Application (HDCA)",
      desc: "Professional qualification in computer operations and applications.",
      icon: <FileBadge size={18} className="text-cyber-red" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative border-t border-cyber-border/40 grid-dots px-6 lg:px-12">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-cyber-red/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="mb-12">
          <span className="text-[10px] text-cyber-red font-mono tracking-[0.2em] font-bold">DISCOVER</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white mt-1">
            ABOUT <span className="text-cyber-red">ME</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN (CAREER OBJECTIVE & EDUCATION) */}
          <div className="lg:col-span-7 bg-cyber-card/40 backdrop-blur-md border border-cyber-border rounded-2xl p-8 shadow-glow-red flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Objective */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-cyber-red">
                  <User size={18} />
                  <h4 className="text-xs font-bold font-mono tracking-widest uppercase">CAREER OBJECTIVE</h4>
                </div>
                <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                  To work in an organization that provides opportunities to apply my skills, learn new technologies, 
                  and contribute to achieving organizational goals while advancing my career.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-cyber-red">
                  <GraduationCap size={18} />
                  <h4 className="text-xs font-bold font-mono tracking-widest uppercase">EDUCATION HISTORY</h4>
                </div>
                
                <div className="space-y-4 font-mono">
                  {education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-cyber-red/30 pl-4 py-1 space-y-1 hover:border-cyber-red transition-colors duration-300">
                      <div className="flex flex-wrap justify-between items-start text-xs md:text-sm">
                        <h5 className="font-bold text-white">{edu.degree}</h5>
                        <span className="text-[10px] text-cyber-red bg-cyber-red/5 px-2 py-0.5 rounded border border-cyber-red/20">{edu.duration}</span>
                      </div>
                      <p className="text-[11px] text-gray-400">{edu.institution}</p>
                      <p className="text-[10px] text-gray-500">{edu.grade}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="border-t border-cyber-border/40 pt-6 mt-6 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>Location Focus: Tamil Nadu, India</span>
              <span className="text-cyber-red font-bold">READY TO BUILD</span>
            </div>
          </div>

          {/* RIGHT COLUMN (TRAINING & CERTIFICATIONS) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-full bg-cyber-card/40 backdrop-blur-md border border-cyber-border rounded-2xl p-8 shadow-glow-red flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-cyber-red">
                  <Trophy size={18} />
                  <h4 className="text-xs font-bold font-mono tracking-widest uppercase">TRAINING & CERTS</h4>
                </div>

                <div className="space-y-5">
                  {trainingAndCertifications.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-4 p-3 bg-black/40 border border-cyber-border/40 rounded-xl hover:border-cyber-red/40 hover:shadow-[0_0_15px_rgba(255,0,60,0.1)] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cyber-red/5 border border-cyber-border group-hover:border-cyber-red/40 flex items-center justify-center transition-all duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <div className="font-mono">
                        <h4 className="text-[11px] font-bold text-white group-hover:text-cyber-red transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-[9px] text-gray-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-cyber-border/40 pt-4 mt-6 text-center text-[9px] font-mono text-gray-500">
                Verified Credentials & Certifications Listed Above
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;