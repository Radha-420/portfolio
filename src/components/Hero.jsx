import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-bg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-accent-soft opacity-50 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-accent-soft opacity-40 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight">
                Hi, I'm <br />
                <span className="text-accent">
                  Radha Krishna Devarakonda
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary">
                Computer Science & Engineering Student | Full Stack Developer
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-secondary max-w-lg leading-relaxed">
              Motivated Computer Science & Engineering student with a strong interest in Full Stack Development and software engineering. Passionate about building real-world applications, strengthening problem-solving skills, and contributing to impactful technology solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors shadow-md group">
                View My Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/my%20resume.pdf" download="Radha_Krishna_Resume.pdf" className="inline-flex items-center px-6 py-3 rounded-full bg-surface text-primary font-medium border border-border-theme hover:bg-accent-soft transition-all shadow-sm">
                Download Resume
                <Download size={18} className="ml-2 text-secondary group-hover:text-accent" />
              </a>
            </div>
            
            <div className="flex items-center space-x-5 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface text-secondary hover:text-accent hover:shadow-md border border-border-theme hover:border-accent transition-all">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface text-secondary hover:text-accent hover:shadow-md border border-border-theme hover:border-accent transition-all">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:radhakrishna2787@gmail.com" className="p-2.5 rounded-full bg-surface text-secondary hover:text-accent hover:shadow-md border border-border-theme hover:border-accent transition-all">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-full glass-card overflow-hidden flex items-center justify-center p-2 group">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                 <img 
                    src="/IMG_7953.JPG.jpeg" 
                    alt="Radha Krishna Devarakonda" 
                    className="w-full h-full object-cover object-center"
                 />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
