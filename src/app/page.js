"use client";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Masthead from "../components/Masthead/Masthead";
import DefencePolicy from "../components/DefencePolicy/DefencePolicy";
import FutureOf from "../components/FutureOf/FutureOf";
import DefenceTech from "../components/DefenceTech/DefenceTech";
import BusinessEconomy from "../components/BusinessEconomy/BusinessEconomy";
import BottomSection from "../components/BottomSection/BottomSection";
import BackToTop from "../components/BackToTop/BackToTop";

export default function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const reveal = () => {
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) sec.classList.add(styles.visible);
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* <Navbar /> */}
      <Masthead />
      <DefencePolicy />
      <FutureOf />
      <DefenceTech />
      <BusinessEconomy />
      <BottomSection />
      <BackToTop />
    </div>
  );
}
