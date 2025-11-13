"use client";
import { useEffect, useRef } from "react";
import styles from "./FutureOf.module.css";

export default function FutureOf() {
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
      <h2 className={styles.heading}>Future of Innovation</h2>
      <div ref={textRef} className={styles.textContainer}>
        <p>
          Exploring technologies and ideas shaping tomorrows world — from AI to sustainability and beyond.
        </p>

        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <p>
               Our coverage highlights the balance between diplomacy, technology,
              and power shaping the world future.
              Explore global defence policies, international partnerships, and
              innovations driving security advancements. Our coverage highlights the balance between diplomacy, technology,
              and power shaping the world future.Explore global defence policies, international partnerships, and
              innovations driving security advancements.
            </p>
            <p>
              Our coverage highlights the balance between diplomacy, technology,
              and power shaping the world future. Explore global defence policies, international partnerships, and
              innovations driving security advancements.   Our coverage highlights the balance between diplomacy, technology,
              and power shaping the world future.
            </p>
            {/* Optional image */}
            {/* <img src="/defence-side.jpg" alt="Defence Strategy" className={styles.sideImage} /> */}
          </div>

          <div className={styles.rightColumn}>

          </div>
        </div>
      </div>
    </section>
  );
}
