import { useEffect, useState } from 'react';

export function FlowingBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initial center position
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div 
      className="bg-interactive"
      style={{ 
        '--mouse-x': `${mousePosition.x}px`, 
        '--mouse-y': `${mousePosition.y}px` 
      } as React.CSSProperties}
    >
      <div className="bg-glow-secondary"></div>
      <div className="bg-glow"></div>
    </div>
  );
}
