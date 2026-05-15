import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ToolsGrid.css';

const tools = [
  { category: "Design", items: [{name: "Canva Pro", level: "Expert"}, {name: "CapCut", level: "Advanced"}, {name: "Photopea", level: "Intermediate"}, {name: "Adobe Express", level: "Intermediate"}, {name: "After Effects", level: "Basic"}] },
  { category: "AI Tools", items: [{name: "Gemini", level: "Expert"}, {name: "Claude AI", level: "Expert"}, {name: "Manus", level: "Intermediate"}, {name: "NanoBanana", level: "Intermediate"}] },
  { category: "Automation", items: [{name: "n8n.io", level: "Certified Expert"}, {name: "Make", level: "Advanced"}] },
  { category: "Social Media", items: [{name: "Facebook Ads Manager", level: "Advanced"}, {name: "Meta Business Suite", level: "Advanced"}, {name: "Instagram", level: "Expert"}] },
  { category: "Productivity", items: [{name: "Google Docs & Sheets", level: "Expert"}, {name: "Microsoft Office", level: "Advanced"}] }
];

export default function ToolsGrid() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="toolsgrid" className="section container" ref={ref}>
      <h2 className="section-title">Tools & Software</h2>
      
      <div className={`tools-container ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        {tools.map((group, index) => (
          <div className="tool-group" key={index}>
            <h3 className="tool-category">{group.category}</h3>
            <div className="tool-grid">
              {group.items.map((tool, i) => (
                <div className="tool-item card" key={i}>
                  <span className="tool-name">{tool.name}</span>
                  <div className="tooltip">{tool.level}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
