import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    title: "Co-Founder & Digital Marketer",
    company: "MARKETIVA",
    date: "2025",
    type: "Marketing Agency (Co-Founded)",
    points: [
      "Co-founded a digital marketing agency",
      "Created all social media content & campaigns",
      "Managed Facebook page and audience growth",
      "Designed all visual content for the brand"
    ]
  },
  {
    title: "Digital Marketing Specialist",
    company: "Freelance",
    date: "2025 – Present",
    type: "Freelance",
    points: [
      "Managed full social media pages for clients",
      "Daily content posting and scheduling",
      "Grew followers through organic strategies",
      "Page optimization and SEO improvements",
      "Email marketing and newsletter management",
      "Monitored analytics to improve reach"
    ]
  },
  {
    title: "Graphic Designer",
    company: "Self-Employed",
    date: "August 2025 – Present",
    type: "Freelance",
    points: [
      "Designed social media posts & visual content",
      "Delivered creative and clean design outputs",
      "Worked with multiple clients"
    ]
  },
  {
    title: "Digital Marketing Intern",
    company: "Mentoring Platform",
    date: "2 Months",
    type: "Internship (Founder: Mahmoud Qolqala)",
    points: [
      "Crafted Content Calendars & Strategic Plans",
      "Created Visual Designs for the platform",
      "Worked with a Regional Marketing Strategist",
      "Preparing for a major platform launch"
    ]
  },
  {
    title: "Teacher Assistant & Designer",
    company: "With Mr. Mohamed Jasim",
    date: "Previous",
    type: "Assistant / Designer",
    points: [
      "Assisted with PDFs, posts & tech support",
      "Graphic Designer & Video Editor",
      "Used Canva Pro + Adobe After Effects"
    ]
  }
];

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="section container" ref={ref}>
      <h2 className="section-title">Work Experience</h2>
      
      <div className={`timeline ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              
              <div className="timeline-meta">
                <span className="date">
                  <Calendar size={16} /> {exp.date}
                </span>
                <span className="type">{exp.type}</span>
              </div>
              
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
