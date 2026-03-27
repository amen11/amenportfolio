import { useEffect } from 'react';
import '../styles/Nav.css';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const onScroll = () => {
      nav.style.padding = window.scrollY > 80 ? '0.5rem 2.5rem' : '0.8rem 2.5rem';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="mainNav">
      <div className="nav-left">
        <div className="nav-avatar">
          {/* Replace with: <img src="YOUR_PHOTO_URL" alt="Amen Allah Korchane" /> */}
          <div className="nav-avatar-fallback">AK</div>
        </div>
        <span className="nav-name">Amen Korchane</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
      </ul>
      <a href="mailto:akorchane11@gmail.com" className="nav-cta">Hire me ↗</a>
    </nav>
  );
}
