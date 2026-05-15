import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import DonutChart from './DonutChart';
import './Languages.css';

export default function Languages() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="languages" className="section container" ref={ref}>
      <h2 className="section-title">Languages</h2>
      
      <div className={`lang-grid ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="lang-card card">
          <DonutChart percentage={100} color="var(--secondary-color)" label="" />
          <div className="lang-info">
            <h3>Arabic 🇪🇬</h3>
            <p>Native</p>
          </div>
        </div>

        <div className="lang-card card">
          <DonutChart percentage={70} color="var(--accent-color)" label="" />
          <div className="lang-info">
            <h3>English 🇬🇧</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
