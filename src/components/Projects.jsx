import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

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

  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:border-accent group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent-soft text-accent rounded-lg group-hover:scale-110 transition-transform">
                  <Folder size={28} />
                </div>
                <div className="flex space-x-3">
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
              
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-soft text-accent">
                  {project.type}
                </span>
                {project.duration && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-bg text-secondary">
                    {project.duration}
                  </span>
                )}
              </div>
              
              <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border-theme">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-secondary opacity-80">
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
