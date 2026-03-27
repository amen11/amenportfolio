import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

// Mount React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Cursor glow
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);
let mx = 0, my = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
(function tick() {
  cx += (mx - cx) * 0.1;
  cy += (my - cy) * 0.1;
  glow.style.left = cx + 'px';
  glow.style.top  = cy + 'px';
  requestAnimationFrame(tick);
})();

// Scroll reveal
const ro = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
const observe = () => document.querySelectorAll('.reveal').forEach((el) => ro.observe(el));
observe();
setTimeout(observe, 300);
