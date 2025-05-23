'use client';

import { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  animationDuration: number;
}

export default function Confetti({ active }: ConfettiProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  
  const colors = [
    '#FF5733', // Orange (matches SCOPH theme)
    '#FFC300', // Yellow
    '#FF85B5', // Pink
    '#36D7B7', // Teal
    '#3498DB', // Blue
    '#9B59B6', // Purple
  ];

  useEffect(() => {
    if (!active) return;
    
    // Generate random confetti pieces
    const newConfetti: ConfettiPiece[] = [];
    for (let i = 0; i < 60; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * -10 - 10,
        size: Math.random() * 0.8 + 0.4,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 3 + 2,
      });
    }
    
    setConfetti(newConfetti);
    
    // Cleanup
    return () => setConfetti([]);
  }, [active]);
  
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}rem`,
            height: `${piece.size}rem`,
            backgroundColor: piece.color,
            borderRadius: '2px',
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.animationDuration}s ease-in-out forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes confetti-fall {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 20 + 5}px, 100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}