import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-bg">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 30%, rgba(198, 146, 20, 0.10), transparent 35%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Hi, I'm <br />
                <span className="text-accent">
                  Radha Krishna Devarakonda
                </span>
              </h1>
              <h2 className={`text-xl sm:text-2xl font-semibold text-secondary relative z-10 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Computer Science & Engineering Student | <span className="text-subtle-gold">Full Stack Developer</span>
              </h2>
            </div>
            
            <p className={`text-base sm:text-lg text-secondary max-w-lg leading-relaxed transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Motivated Computer Science & Engineering student with a strong interest in Full Stack Development and software engineering. Passionate about building real-world applications, strengthening problem-solving skills, and contributing to impactful technology solutions.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-2 relative z-10 transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="#projects" className="relative overflow-hidden inline-flex items-center px-6 py-3 rounded-full bg-accent text-[#18181B] font-medium hover:bg-accent-hover transition-colors shadow-md group">
                <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-[shimmer_1s_forwards] skew-x-12"></span>
                <span className="relative z-10 flex items-center">
                  View My Projects
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="/my%20resume.pdf" download="Radha_Krishna_Resume.pdf" className="inline-flex items-center px-6 py-3 rounded-full bg-surface text-primary font-medium border border-accent hover:bg-accent-soft transition-all shadow-sm group">
                Download Resume
                <Download size={18} className="ml-2 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <div className={`flex items-center space-x-5 pt-4 transition-all duration-1000 delay-[900ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          
          <div className={`hidden lg:flex justify-center relative transition-all duration-1000 delay-[400ms] ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-subtle-gold opacity-30 transition-transform duration-[3000ms] ease-linear group-hover:rotate-180"></div>
              <div className="absolute w-[115%] h-[115%] rounded-full border border-subtle-gold opacity-10 transition-transform duration-[3000ms] ease-linear group-hover:-rotate-180"></div>
            </div>
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden flex items-center justify-center border-2 border-accent shadow-[0_0_30px_rgba(198,146,20,0.15)] group group-hover:shadow-[0_0_40px_rgba(198,146,20,0.4)] transition-shadow duration-700 z-10">
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
