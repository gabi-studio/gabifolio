import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>Gabi Catalan - Developer & Product Designer</h1>
        <nav className="header-nav">
            <ul className="header-nav-list">
                <li><a href="#projects">Projects</a></li>
                <li><a href="mailto:gabistudio.dev@gmail.com">Get in Touch</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}
