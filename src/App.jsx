import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import styles from "./App.module.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleNavClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const sectionId = href.substring(1);
        navigateToSection(sectionId);
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <div className={styles.appContainer}>
      <Header onNavigate={navigateToSection} />

      <main className={styles.mainContent}>
        <section id="home" className={styles.section}>
          <Home />
        </section>

        <section id="cardapio" className={styles.section}>
          <Menu />
        </section>

        <section id="sobre" className={styles.section}>
          <Sobre />
        </section>

        <section id="contato" className={styles.section}>
          <Contato />
        </section>
      </main>

      <Footer />
    </div>
  );
}
