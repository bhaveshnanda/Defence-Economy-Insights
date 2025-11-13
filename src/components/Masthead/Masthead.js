import styles from "./Masthead.module.css";
import Navbar from '../Navbar/Navbar';

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <Navbar />
      {/* <div className={styles.overlay}>
        <h1>Welcome to My Website</h1>
        <p>Exploring Defence, Technology, and Economy</p>
      </div> */}
    </header>
  );
}
