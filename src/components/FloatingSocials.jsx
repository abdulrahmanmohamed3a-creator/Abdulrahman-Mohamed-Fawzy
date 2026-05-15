import { Mail } from 'lucide-react';
import './FloatingSocials.css';

const Linkedin = ({ size, className }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsApp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function FloatingSocials() {
  return (
    <div className="floating-socials">
      <a href="https://www.linkedin.com/in/abdulrahman-fawzy" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href="https://wa.me/201206721372" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" title="WhatsApp">
        <WhatsApp size={20} />
      </a>
      <a href="mailto:Abdulrahmanmohamed.3a@gmail.com" className="social-icon" title="Email">
        <Mail size={20} />
      </a>
    </div>
  );
}
