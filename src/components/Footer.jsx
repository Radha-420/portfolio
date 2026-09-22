import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-surface text-primary py-12 relative border-t border-border-theme transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tighter mb-2 text-primary">
              RK<span className="text-accent">.</span>
            </h2>
            <p className="text-secondary text-sm">
              © 2026 Radha Krishna Devarakonda. <br className="md:hidden" /> All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:radhakrishna2787@gmail.com" className="text-secondary hover:text-accent transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
          
          <div>
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-soft hover:bg-accent text-accent hover:text-white transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
