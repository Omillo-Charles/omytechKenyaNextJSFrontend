import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="tGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          
          {/* Glow Effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Circle (O) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="8"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />

        {/* Inner Circle for depth */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* The T - Vertical Bar */}
        <rect
          x="46"
          y="25"
          width="8"
          height="50"
          fill="url(#tGradient)"
          rx="4"
          filter="url(#glow)"
        />

        {/* The T - Horizontal Bar */}
        <rect
          x="30"
          y="25"
          width="40"
          height="8"
          fill="url(#tGradient)"
          rx="4"
          filter="url(#glow)"
        />

        {/* Tech Circuit Pattern */}
        <g opacity="0.3">
          {/* Small circuit lines */}
          <line x1="20" y1="30" x2="25" y2="30" stroke="#06b6d4" strokeWidth="1"/>
          <line x1="75" y1="30" x2="80" y2="30" stroke="#06b6d4" strokeWidth="1"/>
          <line x1="20" y1="70" x2="25" y2="70" stroke="#06b6d4" strokeWidth="1"/>
          <line x1="75" y1="70" x2="80" y2="70" stroke="#06b6d4" strokeWidth="1"/>
          
          {/* Small dots */}
          <circle cx="22" cy="30" r="1.5" fill="#06b6d4"/>
          <circle cx="78" cy="30" r="1.5" fill="#06b6d4"/>
          <circle cx="22" cy="70" r="1.5" fill="#06b6d4"/>
          <circle cx="78" cy="70" r="1.5" fill="#06b6d4"/>
        </g>

        {/* Central Tech Dot */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#06b6d4"
          className="animate-ping"
          style={{ animationDuration: '2s' }}
        />
      </svg>
    </div>
  );
};

export default Logo;