import '../styles/Experience.css';

const jobs = [
  {
    title: 'Mobile Developer',
    company: 'Vnext Consulting · Bizerte',
    date: 'Aug 2024 – Present',
    type: 'Full-time',
    tagClass: 'tag-full',
    bullets: [
      <>Shipped new features for <strong>Bright Campus &amp; Bright Pro</strong>, enhancing the experience for students and institutions.</>,
      'Improved app stability and reduced load times by optimizing state management and API request handling.',
      'Collaborated cross-functionally with backend and design teams to deliver cohesive, user-focused releases.',
    ],
    tech: ['React Native', 'Ionic', 'Firebase'],
  },
  {
    title: 'Mobile Developer Intern',
    company: 'SeekMake · Tunis',
    date: 'Jan 2024 – Jun 2024',
    type: 'Internship',
    tagClass: 'tag-intern',
    bullets: [
      <>Led the <strong>full development lifecycle</strong> of the SeekMake mobile app — from architecture to deployment — independently.</>,
      'Built authentication flows, user dashboards, product browsing, and complete API integrations from scratch.',
      'Significantly improved UI consistency and responsiveness across screen sizes using Flutter best practices.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Fenix Future Dev · Sousse',
    date: 'Jun 2023 – Jul 2023',
    type: 'Internship',
    tagClass: 'tag-intern',
    bullets: [
      'Built a responsive company website and a modern university platform with role-based UI and dynamic data.',
      'Translated Figma designs into pixel-perfect React components using TailwindCSS.',
    ],
    tech: ['React.js', 'TailwindCSS', 'WordPress', 'Figma'],
  },
  {
    title: 'Full-Stack Intern',
    company: 'Topnet · Tunis',
    date: 'Jul 2022 – Aug 2022',
    type: 'Internship',
    tagClass: 'tag-intern',
    bullets: [
      'Designed and built a provider management system with full CRUD operations and admin dashboards.',
    ],
    tech: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Mobile Developer Intern',
    company: 'TakenTechs · Gabes',
    date: 'Feb 2021 – Jun 2021',
    type: 'Internship',
    tagClass: 'tag-intern',
    bullets: [
      <>Built a cross-platform <strong>expense tracking app</strong> with real-time database sync, charts, categories, and custom authentication.</>,
    ],
    tech: ['React Native', 'Expo', 'Node.js', 'Firebase'],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="eyebrow reveal">03 — Experience</div>
        <h2 className="sec-title reveal">Where I've <em>worked.</em></h2>
        <p className="sec-sub reveal">Teams I've contributed to and the impact I've made along the way.</p>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div className={`tl-item reveal reveal-delay-${Math.min(i + 1, 4)}`} key={i}>
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="job-top">
                  <div>
                    <div className="job-title">{job.title}</div>
                    <div className="job-co">{job.company}</div>
                  </div>
                  <div className="job-meta">
                    <span className="job-date">{job.date}</span>
                    <span className={`job-tag ${job.tagClass}`}>{job.type}</span>
                  </div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="tech-row">
                  {job.tech.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
