"use client";
import { useEffect, useRef } from "react";
import styles from "./DefencePolicy.module.css";

export default function DefencePolicy() {
  const textRef = useRef(null);

  useEffect(() => {
    const textBlock = textRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textBlock.classList.add(styles.visible);
          } else {
            textBlock.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textBlock) observer.observe(textBlock);
    return () => {
      if (textBlock) observer.unobserve(textBlock);
    };
  }, []);

  return (
    <section id="defence" className={styles.section}>
      <h2 className={styles.heading}>Defence and Foreign Policy</h2>
      <div ref={textRef} className={styles.textContainer}>
        <p>
          Insights and updates on global defence strategies and international
          relations shaping modern security.
        </p>

        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            {/* Optional image */}
            {/* <img src="/defence-side.jpg" alt="Defence Strategy" className={styles.sideImage} /> */}
          </div>

          <div className={styles.rightColumn}>
            <p>
              Explore global defence policies, international partnerships, and
              innovations driving security advancements.
            </p>
            <p>
              Our coverage highlights the balance between diplomacy, technology,
              and power shaping the world future.
            </p>
                        <p>
              Explore global defence policies, international partnerships, and
              innovations driving security advancements.
            </p>
            <p>
              Our coverage highlights the balance between diplomacy, technology,
              and power shaping the world future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
