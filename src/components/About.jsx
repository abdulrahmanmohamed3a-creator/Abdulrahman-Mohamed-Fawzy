import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';
import './About.css';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="section container" ref={ref}>
      <h2 className="section-title">About Me</h2>
      
      <div className={`about-wrapper ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="about-content">
          <p className="about-text">
            I am a Digital Marketing Specialist backed by over 300 hours of practical training at DEPI and Creativa Hub. 
            My focus includes Social Media Management, Content Writing, Visual Design, Paid Ads, and Customer Engagement. 
            I also use AI tools and automation to enhance my work — always passionate about learning and growing.
          </p>

          <div className="stats-grid">
            <StatBox end={300} suffix="+" label="Training Hours" isVisible={isVisible} />
            <StatBox end={2} suffix="+" label="Years in Marketing" isVisible={isVisible} />
            <StatBox end={7} suffix="+" label="Certifications" isVisible={isVisible} />
            <StatBox end={100} suffix="%" label="Passion & Growth" isVisible={isVisible} />
          </div>
        </div>
        
        <div className="about-image">
          <img src="/about.jpg" alt="Abdulrahman Fawzy" className="about-img card" />
        </div>
      </div>
    </section>
  );
}

function StatBox({ end, suffix, label, isVisible }) {
  const count = useCountUp(end, 2000, isVisible);

  return (
    <div className="stat-box card">
      <div className="stat-number font-numbers">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
