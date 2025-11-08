import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={styles.overlay}>
        <h1>Welcome to My Website</h1>
        <p>Exploring Defence, Technology, and Economy</p>
      </div>
    </header>
  );
}
