import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function DonutChart({ percentage, color, label }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setProgress(percentage), 300);
    }
  }, [isVisible, percentage]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="donut-chart-container" ref={ref}>
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke="var(--border-color)"
          strokeWidth="12"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
          transform="rotate(-90 75 75)"
        />
      </svg>
      <div className="donut-content">
        <span className="donut-percentage font-numbers">{progress}%</span>
      </div>
      <div className="donut-label">{label}</div>
    </div>
  );
}
