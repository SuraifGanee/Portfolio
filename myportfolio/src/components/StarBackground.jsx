import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000); // Density of stars
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1 and 3
        x: Math.random() * 100,      // % of screen width
        y: Math.random() * 100,      // % of screen height
        opacity: Math.random() * 0.5 + 0.5, // 0.5–1
        animationDuration: Math.random() * 4 + 2 // 2s–6s
      });
    }
    setStars(newStars);
  };
    const generateMeteors = () => {
    const numberOfMeteors = 6; // Fixed number of meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Size between 1 and 3
        x: Math.random() * 100,      // % of screen width
        y: Math.random() * 20,      // % of screen height
        delay: Math.random() * 15, // Delay between 0s and 15s
        animationDuration: Math.random() * 3 + 2 // 2s–6s
      });
    }
    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="star animate-pulse-subtle absolute rounded-full bg-white"
          style={{
            width: star.size  + "px",
            height: star.size + "px",
            top: star.y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

       {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="meteor animate-meteor "
          style={{
            width: meteor.size * 50+ "px",
            height: meteor.size + "px",
            top: meteor.y + "%",
            left: meteor.x + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}


    </div>
  );
};
