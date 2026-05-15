import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { X, ExternalLink } from 'lucide-react';
import './Portfolio.css';

const portfolioItems = [
  { id: 1, title: "Talal Abu-Ghazaleh (AI Design)", category: "AI Projects", image: "https://placehold.co/600x800/0D1B3E/FFFFFF?text=Talal+Abu-Ghazaleh" },
  { id: 2, title: "Zakat Concept Design", category: "Graphic Design", image: "https://placehold.co/800x600/1E90FF/FFFFFF?text=Zakat+Design" },
  { id: 3, title: "Mahmoud El-Araby Tribute", category: "Graphic Design", image: "https://placehold.co/600x600/00C2B8/FFFFFF?text=Mahmoud+El-Araby" },
  { id: 4, title: "Reid Hoffman Quote Post", category: "Social Media", image: "https://placehold.co/800x800/1A1A2E/FFFFFF?text=LinkedIn+Quote" },
  { id: 5, title: "Digital Marketing Dashboard", category: "Social Media", image: "https://placehold.co/800x600/4A5568/FFFFFF?text=Marketing+Dashboard" },
  { id: 6, title: "Ad Campaign Strategy", category: "Marketing Campaigns", image: "https://placehold.co/600x400/0D1B3E/FFFFFF?text=Ad+Campaign" },
];

const categories = ["All", "Social Media", "Graphic Design", "Marketing Campaigns", "AI Projects"];

export default function Portfolio() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section container" ref={ref}>
      <h2 className="section-title">Portfolio Gallery</h2>
      
      <div className={`portfolio-container ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="filter-tabs">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {filteredItems.map(item => (
            <div className="masonry-item" key={item.id} onClick={() => setLightboxImg(item)}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="item-overlay">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
                <div className="view-icon"><ExternalLink size={24} /></div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="close-lightbox" onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.image} alt={lightboxImg.title} />
            <div className="lightbox-info">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
