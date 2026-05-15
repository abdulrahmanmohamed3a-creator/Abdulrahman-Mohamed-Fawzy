import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Award, Calendar, Clock } from 'lucide-react';
import './Certifications.css';

const certs = [
  { title: "Digital Marketing Specialist", org: "DEPI - Ministry of Communications & IT", date: "Nov 2024 – May 2025", hours: "174 hours", icon: "🥇" },
  { title: "Digital Marketing", org: "Creativa Hub Alexandria", date: "Certificate of Completion", hours: "93 hours", icon: "🥇" },
  { title: "Canva for Work", org: "Canva Design School", date: "Feb 4, 2026", hours: "Certified", icon: "🎨" },
  { title: "AI Tools for Academic Success", org: "Udemy", date: "March 2025", hours: "", icon: "🤖" },
  { title: "AI Agent Program", org: "n8n.io + SkillUp Egypt", date: "Completed", hours: "26 hours", icon: "🤖" },
  { title: "ICDL Certificate", org: "Center for Research & Commercial Studies Alexandria", date: "Completed", hours: "", icon: "📊" },
  { title: "Project Management", org: "AmCham Egypt", date: "Nov 2024", hours: "35 hours", icon: "📋" },
  { title: "MOS - Microsoft Office Specialist", org: "Microsoft", date: "June – Aug 2024", hours: "60 hours", icon: "📋" }
];

export default function Certifications() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="section container" ref={ref}>
      <h2 className="section-title">Certifications</h2>
      
      <div className={`certs-grid ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        {certs.map((cert, index) => (
          <div className="flip-card" key={index} onClick={() => handleFlip(index)} style={{ cursor: 'pointer' }}>
            <div className={`flip-card-inner ${flippedIndex === index ? 'is-flipped' : ''}`}>
              <div className="flip-card-front card">
                <span className="cert-icon">{cert.icon}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
              </div>
              <div className="flip-card-back card">
                <Award size={32} className="back-icon" />
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  {cert.date && <span><Calendar size={14}/> {cert.date}</span>}
                  {cert.hours && <span><Clock size={14}/> {cert.hours}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
