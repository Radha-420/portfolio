import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-bg transition-colors duration-300">
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute -top-20 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 dark:opacity-[0.05] animate-blob"
      ></div>
      <div 
        className="absolute top-40 right-1/4 w-96 h-96 bg-subtle-gold rounded-full mix-blend-multiply filter blur-[120px] opacity-20 dark:opacity-[0.05] animate-blob animation-delay-2000"
      ></div>
      <div 
        className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent-soft rounded-full mix-blend-multiply filter blur-[120px] opacity-40 dark:opacity-[0.02] animate-blob animation-delay-4000"
      ></div>

      {/* Mouse Follower Orb */}
      <div 
        className="absolute w-[500px] h-[500px] bg-accent rounded-full mix-blend-screen filter blur-[150px] opacity-10 dark:opacity-[0.03] transition-transform duration-1000 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`
        }}
      ></div>
    </div>
  );
};

export default BackgroundAnimation;
