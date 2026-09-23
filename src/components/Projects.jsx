import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'Student Academic Monitoring System',
      type: 'Live Project',
      duration: 'Aug 2023 – Jan 2024',
      description: 'An academic performance monitoring system with database integration, developed as a live project.',
      technologies: ['Full Stack', 'Database Integration'],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Secure Academic Communication System',
      type: 'Live Project – Aditya University',
      duration: '',
      description: 'A secure academic communication and announcement management system designed to support centralized academic communication and announcement management.',
      technologies: ['Full Stack', 'Secure Communication'],
      githubUrl: null,
      liveUrl: null
    }
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="projects" className={`py-24 bg-bg relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="relative glass-card rounded-2xl p-8 hover:border-border-theme hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 group flex flex-col h-full overflow-hidden z-10">
              {/* Premium Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent-soft text-accent rounded-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Folder size={28} />
                </div>
                <div className="flex space-x-3 relative z-20">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-soft text-accent group-hover:bg-accent group-hover:text-[#18181B] transition-colors duration-300">
                  {project.type}
                </span>
                {project.duration && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-bg text-secondary group-hover:text-primary transition-colors duration-300">
                    {project.duration}
                  </span>
                )}
              </div>
              
              <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow group-hover:text-primary transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border-theme group-hover:border-accent/30 transition-colors duration-300">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-secondary opacity-80 group-hover:text-accent group-hover:opacity-100 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
