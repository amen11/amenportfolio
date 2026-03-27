import { useEffect, useRef } from 'react';
import '../styles/Contact.css';

const education = [
  { icon: '🏛️', degree: 'Computer Science Engineering', school: 'Tek-Up University', year: '2021 – 2024' },
  { icon: '🎓', degree: 'Bachelor in Computer Science', school: 'ISIMA, Mahdia', year: '2018 – 2021' },
];

const languages = [
  { name: 'Arabic',  level: 'Native',              width: '100%' },
  { name: 'English', level: 'B2 · OnSet Certified', width: '72%'  },
  { name: 'French',  level: 'Intermediate',         width: '55%'  },
];

function LangCard({ name, level, width }) {
  const fillRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && fillRef.current) {
          setTimeout(() => { fillRef.current.style.width = width; }, 220);
        }
      },
      { threshold: 0.45 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div className="lang-card reveal" ref={cardRef}>
      <div className="lang-name">{name}</div>
      <div className="lang-level">{level}</div>
      <div className="lang-bar">
        <div className="lang-fill" ref={fillRef} style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <section id="education">
        <div className="container">
          <div className="eyebrow reveal">05 — Education</div>
          <h2 className="sec-title reveal">Where I <em>learned.</em></h2>
          <div className="edu-grid" style={{ marginTop: '2rem' }}>
            {education.map((e, i) => (
              <div className={`edu-card reveal reveal-delay-${i + 1}`} key={e.school}>
                <div className="edu-icon">{e.icon}</div>
                <div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-year">{e.year}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3.5rem' }}>
            <div className="eyebrow reveal">Languages</div>
            <div className="lang-row">
              {languages.map((l) => <LangCard key={l.name} {...l} />)}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="connect">
        <div className="connect-glow" />
        <div className="connect-wrap">
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>06 — Contact</div>
          <h2 className="sec-title reveal" style={{ textAlign: 'center' }}>Let's <em>connect.</em></h2>
          <p className="sec-sub reveal" style={{ textAlign: 'center', margin: '0 auto' }}>
            Open to exciting projects, collaborations, or just a chat about mobile tech. Don't be shy!
          </p>
          <a href="mailto:akorchane11@gmail.com" className="email-btn reveal">
            <span style={{ fontSize: '1.15rem' }}>📧</span>
            <span className="email-text">akorchane11@gmail.com</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>↗</span>
          </a>
          <div className="socials reveal">
            <a href="https://linkedin.com/in/amen-korchane/" target="_blank" rel="noopener noreferrer" className="s-btn">💼 LinkedIn</a>
            <a href="https://github.com/amen11" target="_blank" rel="noopener noreferrer" className="s-btn">⎔ GitHub</a>
          </div>
        </div>
      </section>

      <footer>
        <p>· Bizerte, Tunisia · 2025</p>
        <p style={{ fontSize: '0.7rem', opacity: 0.45, marginTop: '4px' }}>
          React Native &amp; Flutter Developer · Open to opportunities
        </p>
      </footer>
    </>
  );
}
