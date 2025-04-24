import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-profile">
        <h2>Full Stack Developer & Product Designer</h2>
        <h3>Hi, I'm Gabi.</h3>
        <div className="hero-links">
          <a href="https://github.com/gabi-studio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.3-1.1.6-1.3-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 5.4 18.7 5.7 18.7 5.7c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.2 5.7.4.3.7 1 .7 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/gabi-c-547573337/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V24h-4V8.5Zm7.5 0h3.7v2.1h.1c.5-.9 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.7c0-1.8-.1-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-4V8.5Z" />
            </svg>
          </a>

          <a href="mailto:gabistudio.dev@gmail.com" className="email-link" id="email-link">
            gabistudio.dev@gmail.com
          </a>
          
        </div>
      </div>
      <div className="hero-info">
        <p>I am obsessed about organizing data, and developing creative and personalized "best possible" solutions to complex problems. </p>
        <a href="#projects" className="hero-button">See My Projects</a>
      </div>
        
    </section>
  );
}
