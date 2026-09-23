import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Development Trainee',
      company: 'Technical Hub, Surampalem',
      duration: 'Nov 2024 – May 2025',
      responsibilities: [
        'Trained in full stack web development using front-end and back-end technologies.',
        'Worked in collaborative, project-based development environments.'
      ]
    },
    {
      role: 'Live Project Developer & Designer',
      company: 'Aditya Polytechnic Colleges, Surampalem',
      duration: 'Aug 2023 – Jan 2024',
      responsibilities: [
        'Developed a Student Academic Monitoring System for tracking performance.',
        'Designed posters for college events, workshops, and technical fests.'
      ]
    },
    {
      role: 'Live Project Developer & Designer',
      company: 'Aditya University',
      duration: 'Live Project',
      responsibilities: [
        'Project: Secure Academic Communication and Announcement Management System.',
        'Contributed to a secure academic communication platform designed to support centralized academic communication and announcement management.'
      ]
    }
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="experience" className={`py-24 bg-surface relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-subtle-gold before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-theme bg-accent-soft text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={18} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-primary">{exp.role}</h3>
                </div>
                <div className="text-accent font-medium text-sm mb-4">
                  {exp.company} <span className="text-secondary/50 font-normal mx-1">•</span> <span className="text-secondary">{exp.duration}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-secondary">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
