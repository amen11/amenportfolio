import '../styles/Hero.css';
import amenPhoto from '../assets/amen.jpg';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />
      <div className="hero-inner">

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <div className="hero-photo-inner">
              <img src={amenPhoto} alt="Amen Allah Korchane" />
            </div>
          </div>
          <div className="hero-status" />
        </div>

        <div className="hero-badge">
          <span className="badge-dot" />
          Open to opportunities
        </div>

        <h1 className="hero-name">
          <span className="l1">Amen Allah</span>
          <span className="l2">Korchane</span>
        </h1>

        <p className="hero-role">
          Mobile Developer · <strong>React Native</strong> &amp; <strong>Flutter</strong>
        </p>

        <p className="hero-tagline">
          I build polished, high-performance cross-platform apps that users actually love —
          from elegant UIs to scalable, maintainable architectures.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View my work ↓</a>
          <a href="mailto:akorchane11@gmail.com" className="btn btn-outline">Get in touch</a>
        </div>

        <div className="hero-chips">
          {['React Native', 'Flutter', 'Firebase', 'TypeScript', 'Dart'].map((chip) => (
            <span className="hero-chip" key={chip}>
              <span className="chip-dot" />
              {chip}
            </span>
          ))}
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        </div>
      </div>
    </section>
  );
}
