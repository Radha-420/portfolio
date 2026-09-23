import { Award, Trophy, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Achievements = () => {
  const achievements = [
    {
      title: 'Live Project Completion',
      description: 'Successfully completed a Live Project on Student Academic Monitoring.',
      icon: <Star className="text-accent" size={24} />
    },
    {
      title: 'Hackathon Participant',
      description: 'Participated in GDG (Google Developer Groups) Hackathon.',
      icon: <Trophy className="text-accent" size={24} />
    },
    {
      title: 'Hackathon Participant',
      description: 'Participated in GeeksforGeeks Hackathon.',
      icon: <Award className="text-accent" size={24} />
    }
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="achievements" className={`py-24 bg-bg relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Achievements & Participation</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-accent-soft rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-300 [&>svg]:group-hover:text-white">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{achievement.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
