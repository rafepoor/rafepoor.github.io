import { useState } from 'react';
import { IconShield, IconMenu, IconClose } from './icons';
import styles from './Navbar.module.css';

const navItems = [
  { path: '#perfil', label: 'Perfil' },
  { path: '#experiencia', label: 'Experiencia' },
  { path: '#formacion', label: 'Formación' },
  { path: '#competencias', label: 'Competencias' },
  { path: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#contacto" className={styles.brand}>
          <IconShield size={22} />
          <span>Raul Polanco Ortiz</span>
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>

        <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
