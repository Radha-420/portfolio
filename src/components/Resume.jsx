import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-24 bg-accent-soft relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-surface opacity-40 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface opacity-40 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-surface opacity-90 rounded-full mb-8 backdrop-blur-sm text-accent">
          <FileText size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Want to know more about me?
        </h2>
        
        <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
          Download my resume to get a comprehensive overview of my education, technical skills, project experience, and achievements.
        </p>
        
        <a 
          href="/my%20resume.pdf" 
          download="Radha_Krishna_Resume.pdf"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-white hover:bg-accent-hover hover:scale-105 transition-all shadow-md hover:shadow-lg"
        >
          Download My Resume
          <Download size={20} className="ml-3" />
        </a>
      </div>
    </section>
  );
};

export default Resume;
