import { Terminal, Database, Globe, Wrench, Cpu } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="text-accent group-hover:text-accent-hover transition-colors" size={24} />,
      skills: ['Java', 'JavaScript']
    },
    {
      title: 'Software Engineering',
      icon: <Cpu className="text-accent group-hover:text-accent-hover transition-colors" size={24} />,
      skills: ['Data Structures', 'Object-Oriented Programming', 'Problem Solving']
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-accent group-hover:text-accent-hover transition-colors" size={24} />,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="text-accent group-hover:text-accent-hover transition-colors" size={24} />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools & Foundations',
      icon: <Wrench className="text-accent group-hover:text-accent-hover transition-colors" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'AI Basics', 'Data Analytics Basics']
    }
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="skills" className={`py-24 bg-bg relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:border-border-theme hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent-soft rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-bg text-secondary text-sm rounded-full border border-border-theme hover:bg-accent-soft hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
