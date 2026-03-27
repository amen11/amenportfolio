import '../styles/Projects.css';

const projects = [
  {
    icon: '🛒', iconClass: 'pi-amber',
    name: 'A9thili',
    desc: 'A full-featured Android e-commerce app with product listings, cart management, secure checkout, and a Firebase-powered backend. Optimized for smooth Android performance.',
    tech: ['Java', 'Android Studio', 'Firebase'],
    url: 'https://github.com/amen11/A9thili',
    label: 'View repo →',
  },
  {
    icon: '🎓', iconClass: 'pi-purple',
    name: 'BeCertified',
    desc: 'A mobile e-learning platform featuring online courses, quizzes, real-time progress tracking, and Firebase sync — making certification journeys measurable and engaging.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    url: 'https://github.com/amen11/BeCertified',
    label: 'View repo →',
  },
  {
    icon: '🧒', iconClass: 'pi-teal',
    name: 'Little Minds',
    desc: 'An interactive educational app designed for early learners, with colorful, engaging screens built to make foundational skill-building genuinely fun and age-appropriate.',
    tech: ['Flutter', 'Dart'],
    url: 'https://github.com/amen11/preschoolapp',
    label: 'View repo →',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="eyebrow reveal">04 — Projects</div>
        <h2 className="sec-title reveal">Things I've <em>built.</em></h2>
        <p className="sec-sub reveal">Click any card to view the project on GitHub.</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a
              href={p.url} target="_blank" rel="noopener noreferrer"
              className={`proj-card reveal reveal-delay-${i + 1}`} key={p.name}
            >
              <div className="proj-head">
                <div className={`proj-icon ${p.iconClass}`}>{p.icon}</div>
                <span className="proj-gh">⎔ GitHub</span>
              </div>
              <div className="proj-name">{p.name}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="tech-row">
                {p.tech.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
              <div className="proj-footer">
                <span />
                <span className="proj-arrow">{p.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
