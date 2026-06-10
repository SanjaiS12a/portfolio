import { Mail, MapPin, Send, MessageSquare, PhoneCall } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-cyber-border/40 grid-dots px-6 lg:px-12">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="mb-12 text-center lg:text-left">
          <span className="text-[10px] text-cyber-red font-mono tracking-[0.2em] font-bold">CONNECT</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white mt-1">
            GET IN <span className="text-cyber-red">TOUCH</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: INFO CARDS */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Email Card */}
              <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-5 shadow-glow-red hover:border-cyber-border-active transition-colors duration-300">
                <p className="text-[9px] text-gray-500 font-mono mb-2 uppercase">COMMUNICATIONS PORT</p>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-9 h-9 rounded-xl bg-cyber-red/10 border border-cyber-red/35 flex items-center justify-center text-cyber-red">
                    <Mail size={16} />
                  </div>
                  <div className="font-mono">
                    <h5 className="text-[8px] text-gray-500 uppercase">Email</h5>
                    <a href="mailto:sanjaisaravanan984@gmail.com" className="text-xs md:text-sm font-bold hover:text-cyber-red transition-colors duration-300">
                      sanjaisaravanan984@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-5 shadow-glow-red hover:border-cyber-border-active transition-colors duration-300">
                <p className="text-[9px] text-gray-500 font-mono mb-2 uppercase">VOICE SIGNAL COMMS</p>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-9 h-9 rounded-xl bg-cyber-red/10 border border-cyber-red/35 flex items-center justify-center text-cyber-red">
                    <PhoneCall size={16} />
                  </div>
                  <div className="font-mono">
                    <h5 className="text-[8px] text-gray-500 uppercase">Phone</h5>
                    <a href="tel:+917603978534" className="text-xs md:text-sm font-bold hover:text-cyber-red transition-colors duration-300">
                      +91 7603978534
                    </a>
                  </div>
                </div>
              </div>

              {/* Geolocation Card */}
              <div className="bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-2xl p-5 shadow-glow-red hover:border-cyber-border-active transition-colors duration-300">
                <p className="text-[9px] text-gray-500 font-mono mb-2 uppercase">GEOLOCATION SYSTEM</p>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-9 h-9 rounded-xl bg-cyber-red/10 border border-cyber-red/35 flex items-center justify-center text-cyber-red">
                    <MapPin size={16} />
                  </div>
                  <div className="font-mono">
                    <h5 className="text-[8px] text-gray-500 uppercase">Location</h5>
                    <p className="text-xs md:text-sm font-bold">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-cyber-card/30 border border-cyber-border/30 rounded-2xl p-5 text-center lg:text-left select-none">
              <p className="text-[11px] font-mono text-gray-500 leading-relaxed">
                Looking to build a custom AI predictive dashboard, train custom deep learning neural networks, or consult on technical systems? 
                Drop a signal. I reply within 24 hours.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7 bg-cyber-card/45 backdrop-blur-md border border-cyber-border rounded-3xl p-8 shadow-glow-red hover:border-cyber-border-active transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-cyber-border pb-4">
              <MessageSquare size={18} className="text-cyber-red" />
              <h4 className="text-xs font-bold font-mono tracking-widest text-white uppercase">SEND DIRECT MESSAGE</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Sender Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-cyber-border/75 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-red focus:shadow-[0_0_10px_rgba(255,0,60,0.2)] font-mono transition-all duration-300"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-cyber-border/75 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-red focus:shadow-[0_0_10px_rgba(255,0,60,0.2)] font-mono transition-all duration-300"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Message Payload</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-cyber-border/75 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-red focus:shadow-[0_0_10px_rgba(255,0,60,0.2)] font-mono transition-all duration-300 resize-none"
                  placeholder="Compile and transmit message details..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full group bg-cyber-red text-white py-3.5 rounded-xl flex items-center justify-center gap-3 font-semibold text-xs tracking-widest transition-all duration-300 border border-cyber-red ${
                  status === "success"
                    ? "bg-green-600 border-green-600 hover:bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                    : "hover:bg-cyber-red-hover hover:shadow-[0_0_20px_rgba(255,0,60,0.4)]"
                }`}
              >
                {status === "sending" && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                {status === "success" && "MESSAGE TRANSMITTED SUCCESSFUL"}
                {status === "" && (
                  <>
                    TRANSMIT SIGNAL
                    <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
