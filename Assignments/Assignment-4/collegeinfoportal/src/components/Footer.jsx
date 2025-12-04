import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <p className={styles.text}>
          © {new Date().getFullYear()} College Info Portal — Built with React Router, Components, Props, State, and useEffect.
        </p>
      </div>
    </footer>
  );
}
