// src/components/Footer/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gabi Catalan. All rights reserved.</p>
    </footer>
  );
}
