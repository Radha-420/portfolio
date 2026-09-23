import { BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      institution: 'Aditya University',
      duration: '2025 – 2028',
      score: null
    },
    {
      degree: 'Diploma – Computer Science & Engineering',
      institution: 'Aditya College of Engineering and Technology',
      duration: '2022 – 2025',
      score: 'Percentage: 88.80%'
    },
    {
      degree: 'SSC (X)',
      institution: 'GOVT. High Shcool',
      duration: '2022',
      score: 'SCGPA: 9.2'
    }
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="education" className={`py-24 bg-surface relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-border-theme ml-4 md:ml-6 space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border-theme shadow-sm text-accent">
                <BookOpen size={18} />
              </div>
              
              <div className="bg-bg rounded-2xl p-6 border border-border-theme hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                  <span className="inline-block px-3 py-1 bg-surface text-accent text-xs font-semibold rounded-full border border-border-theme shadow-sm whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>
                
                <h4 className="text-accent font-medium mb-3">{item.institution}</h4>
                
                {item.score && (
                  <p className="text-sm font-semibold text-secondary bg-surface inline-block px-3 py-1 rounded border border-border-theme">
                    {item.score}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
