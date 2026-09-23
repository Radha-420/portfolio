import { GraduationCap, Code, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="about" className={`py-24 bg-surface relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-secondary leading-relaxed">
            I am a Computer Science & Engineering student interested in Full Stack Development and software engineering. I enjoy building real-world applications, improving my problem-solving skills, and exploring modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary mb-2">B.Tech – CSE</h3>
            <p className="text-secondary text-sm">Aditya University</p>
            <p className="text-secondary text-xs mt-1 opacity-70">2025 – 2028</p>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary mb-2">Full Stack Development</h3>
            <p className="text-secondary text-sm">Technical Hub</p>
            <p className="text-secondary text-xs mt-1 opacity-70">Nov 2024 – May 2025</p>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary mb-2">Location</h3>
            <p className="text-secondary text-sm">Yeleswaram, India</p>
            <p className="text-secondary text-xs mt-1 opacity-70">Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
