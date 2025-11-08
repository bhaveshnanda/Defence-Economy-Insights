"use client";
import { useEffect, useRef } from "react";
import styles from "./DefenceTech.module.css";

export default function DefenceTech() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add(styles.visible);
          } else {
            section.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="tech" ref={sectionRef} className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Defence Technology</h2>
        <p className={styles.intro}>
          Latest innovations in military technology, surveillance systems, and advanced weaponry.
        </p>

        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.column}>
            <img
              src="/images/Defence-tech.jpg"
              alt="Military AI Systems"
              className={styles.image}
            />
            <p>AI-driven drones revolutionizing battlefield intelligence.</p>
            <p>Real-time data analysis improving tactical decisions.</p>
            <p>Smart sensors enhancing situational awareness.</p>
            <p>Automated systems optimizing field operations.</p>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <p>Cyber defence frameworks ensuring global data security.</p>
            <p>AI threat detection for modern warfare protection.</p>
            <p>End-to-end encryption securing communication channels.</p>
            <p>Advanced firewalls defending digital frontlines.</p>
            <img
              src="/images/Defence-tech.jpg"
              alt="Cyber Security"
              className={styles.image}
            />
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <img
              src="/images/Defence-tech.jpg"
              alt="Robotic Warfare"
              className={styles.image}
            />
            <p>Autonomous robotics transforming strategic combat operations.</p>
            <p>Unmanned vehicles improving field precision.</p>
            <p>AI-powered robotics enhancing tactical support.</p>
            <p>Next-gen defense bots reducing human risk.</p>
          </div>

          {/* Column 4 */}
          <div className={styles.column}>
            <p>Satellite tech powering next-gen surveillance</p>
            <p>AI integration for real-time imagery processing.</p>
            <p>Global positioning systems improving strike accuracy.</p>
            <p>Communication satellites ensuring global defense connectivity.</p>
            <img
              src="/images/Defence-tech.jpg"
              alt="Satellite Systems"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
