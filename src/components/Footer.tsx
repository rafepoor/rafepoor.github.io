import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Raul Fernando Polanco Ortiz · Desarrollador Junior · Ciberseguridad</p>
    </footer>
  );
}
