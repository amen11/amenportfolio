import '../styles/Skills.css';

const skillGroups = [
  {
    icon: '📱', color: 'sgi-purple', title: 'Mobile Dev',
    pills: ['React Native', 'Flutter', 'Expo', 'Ionic', 'Android'],
  },
  {
    icon: '🗄️', color: 'sgi-teal', title: 'State & Data',
    pills: ['Redux', 'Zustand', 'Bloc', 'Provider', 'Firebase', 'REST APIs', 'Axios'],
  },
  {
    icon: '🌐', color: 'sgi-pink', title: 'Frontend & Backend',
    pills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'TailwindCSS'],
  },
  {
    icon: '💻', color: 'sgi-amber', title: 'Languages',
    pills: ['TypeScript', 'JavaScript', 'Dart'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow reveal">02 — Skills</div>
        <h2 className="sec-title reveal">My <em>toolkit.</em></h2>
        <p className="sec-sub reveal">Technologies I reach for to bring ideas to life, from mobile to full-stack.</p>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className={`skill-group reveal reveal-delay-${i + 1}`} key={group.title}>
              <div className="sg-head">
                <div className={`sg-icon ${group.color}`}>{group.icon}</div>
                <span className="sg-title">{group.title}</span>
              </div>
              <div className="pills">
                {group.pills.map((pill) => (
                  <span className="pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
