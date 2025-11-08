"use client";
import { useEffect, useRef } from "react";
import styles from "./BusinessEconomy.module.css";

export default function BusinessEconomy() {
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
    <section id="business" ref={sectionRef} className={styles.section}>
      <h2>Business and Economy</h2>
      <p>Trends and insights on global markets, economic strategies, and emerging business opportunities.</p>
    </section>
  );
}
