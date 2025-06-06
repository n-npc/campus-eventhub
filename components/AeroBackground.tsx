import React, { useEffect, useRef } from 'react';

interface AeroBackgroundProps {
  children: React.ReactNode;
}

const AeroBackground: React.FC<AeroBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Draw a more bubble-like effect
    let time = 0;
    const bubbles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      offset: number;
    }> = [];

    // Initialize bubbles
    for (let i = 0; i < 15; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 60, // Bigger size variation
        speed: 0.2 + Math.random() * 0.5, // Slower movement
        offset: Math.random() * Math.PI * 2 // Random starting point in the wave
      });
    }

    const draw = () => {
      if (!ctx) return;
      
      // Clear canvas with a light blue background
      ctx.fillStyle = '#e6f7ff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add a subtle gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(200, 230, 255, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.005;
      
      // Draw bubbles
      bubbles.forEach((bubble, i) => {
        // Move bubble up and slightly side to side
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(time + bubble.offset) * 0.3;
        
        // Reset bubble to bottom if it goes off screen
        if (bubble.y < -bubble.size * 2) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
        
        // Draw bubble with gradient and highlight
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3, 
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x, 
          bubble.y, 
          bubble.size
        );
        
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        gradient.addColorStop(0.7, 'rgba(200, 230, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(180, 220, 255, 0.1)');
        
        // Main bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Bubble highlight
        ctx.beginPath();
        ctx.arc(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          bubble.size * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(draw);
    };

    // Initialize
    resizeCanvas();
    draw();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup function with proper type
    const cleanup = () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    
    return cleanup;
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
          zIndex: 0,
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AeroBackground;
