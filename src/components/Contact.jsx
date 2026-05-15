import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Linkedin = ({ size, className }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });



  return (
    <section id="contact" className="section container" ref={ref}>
      <h2 className="section-title">Get In Touch</h2>
      
      <div className={`contact-wrapper ${isVisible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="contact-info">
          <div className="contact-card card">
            <Phone className="contact-icon" />
            <div className="contact-detail">
              <h4>Phone</h4>
              <p>01206721372</p>
            </div>
          </div>
          
          <div className="contact-card card">
            <Mail className="contact-icon" />
            <div className="contact-detail">
              <h4>Email</h4>
              <p>Abdulrahmanmohamed.3a@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-card card">
            <Linkedin className="contact-icon" />
            <div className="contact-detail">
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/in/abdulrahman-fawzy" target="_blank" rel="noreferrer" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>linkedin.com/in/abdulrahman-fawzy</a>
            </div>
          </div>

          <div className="contact-card card">
            <MapPin className="contact-icon" />
            <div className="contact-detail">
              <h4>Location</h4>
              <p>Alexandria, Egypt</p>
            </div>
          </div>
        </div>

        <form className="contact-form card" action="https://formsubmit.co/Abdulrahmanmohamed.3a@gmail.com" method="POST">
          {/* Prevent captcha if desired (optional), but we will leave it default for better spam protection */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.href} />
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Your Email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="_subject" required placeholder="Subject" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn glow-effect">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
