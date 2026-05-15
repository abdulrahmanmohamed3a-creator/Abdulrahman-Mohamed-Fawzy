import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import DonutChart from './DonutChart';
import './Skills.css';

const extraSkills = [
  "Email Marketing", "Paid Ads", "Content Writing", 
  "Newsjacking", "UGC Strategy", "Brand Identity", 
  "Page Optimization", "SEO Basics"
];

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="section container" ref={ref}>
      <h2 className="section-title">Core Competencies</h2>
      
      <div className={`skills-grid ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        
        {/* Card 1 */}
        <div className="skill-card card">
          <DonutChart percentage={95} color="var(--secondary-color)" label="Social Media" />
          <ul className="skill-list">
            <li>Competitor Analysis & Market Research</li>
            <li>Content Plans & Content Calendars</li>
            <li>Community Engagement</li>
            <li>Organic Growth Strategies</li>
            <li>Facebook | Instagram | LinkedIn</li>
            <li>Meta Business Suite | Ads Manager</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="skill-card card">
          <DonutChart percentage={90} color="var(--accent-color)" label="Visual Design" />
          <ul className="skill-list">
            <li>Canva Pro (1+ year, certified)</li>
            <li>CapCut — video editing</li>
            <li>Photopea — photo editing</li>
            <li>Adobe Express & After Effects</li>
            <li>AI-generated visuals & direction</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="skill-card card">
          <DonutChart percentage={85} color="var(--primary-color)" label="AI & Automation" />
          <ul className="skill-list">
            <li>n8n.io — workflow automation (certified)</li>
            <li>Make (formerly Integromat)</li>
            <li>Manus AI & NanoBanana</li>
            <li>Gemini AI & Claude AI</li>
            <li>Building smart workflows to save time</li>
          </ul>
        </div>

      </div>

      <div className="extra-skills">
        {extraSkills.map((skill, index) => (
          <span 
            key={index} 
            className={`skill-badge ${isVisible ? 'fade-up visible' : 'fade-up'}`}
            style={{ transitionDelay: `${0.1 * index}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
