import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Award, PlayCircle, PenTool } from 'lucide-react';
import './Education.css';

const education = [
  {
    title: "Bachelor of Business Administration",
    school: "Alexandria University",
    date: "2023 – Present",
    icon: <GraduationCap size={24} />
  },
  {
    title: "Digital Marketing Specialist (DEPI)",
    school: "Ministry of Communications",
    date: "Oct 2024 – May 2025",
    icon: <Award size={24} />
  },
  {
    title: "Advanced Media Buying & Strategy",
    school: "Creativa Hub Alexandria",
    date: "2025",
    icon: <PlayCircle size={24} />
  },
  {
    title: "Canva Design",
    school: "Self-Taught (YouTube + Official Tutorials)",
    date: "1+ year",
    icon: <PenTool size={24} />
  }
];

export default function Education() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="education" className="section container" ref={ref}>
      <h2 className="section-title">Education & Training</h2>
      
      <div className={`edu-grid ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        {education.map((edu, index) => (
          <div className="edu-card card" key={index}>
            <div className="edu-icon">
              {edu.icon}
            </div>
            <div className="edu-content">
              <h3>{edu.title}</h3>
              <p className="school">{edu.school}</p>
              <span className="edu-date">{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
