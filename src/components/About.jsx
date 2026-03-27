import '../styles/About.css';

const traits = [
  { icon: '⚡', text: 'Fast learner who thrives in collaborative teams' },
  { icon: '🎯', text: 'Focused on clean architecture & scalable code' },
  { icon: '🎨', text: 'Design-aware developer with a strong eye for UI/UX' },
  { icon: '🌍', text: 'Based in Tunisia, comfortable working with global teams' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="eyebrow reveal">01 — About</div>
        <h2 className="sec-title reveal">
          Passionate about building<br /><em>great mobile experiences.</em>
        </h2>
        <div className="about-layout">
          <div className="about-text">
            <p className="reveal reveal-delay-1">
              I'm a <strong>Mobile Developer</strong> based in Bizerte, Tunisia, with over a year of
              professional experience building cross-platform apps that people actually enjoy using.
              My work spans <strong>React Native</strong> and <strong>Flutter</strong> — and I care
              deeply about every detail, from state management architecture to the subtlety of a
              well-timed animation.
            </p>
            <p className="reveal reveal-delay-2">
              I don't just write code — I think about the{' '}
              <strong>user on the other side of the screen</strong>. Great mobile experiences live at
              the intersection of engineering precision and thoughtful design, and that's the space I
              love to operate in.
            </p>
            <p className="reveal reveal-delay-3">
              When I'm not shipping features, I'm exploring new UI patterns, playing sports, or
              diving into music. Always learning, always building. 🚀
            </p>
            <div className="trait-list">
              {traits.map((t, i) => (
                <div className={`trait reveal reveal-delay-${i + 1}`} key={i}>
                  <span className="trait-icon">{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>
          <div className="about-side">
            <div className="about-img-frame reveal reveal-delay-2">
              {/* Replace with: <img src="YOUR_PHOTO_URL" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Amen" /> */}
              <div className="img-placeholder">
                <div className="ip-icon">👨‍💻</div>
                <span>Your photo here</span>
              </div>
            </div>
            <div className="about-hint reveal reveal-delay-3">
              💡 Add your photo by replacing the placeholder in <code>About.jsx</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
