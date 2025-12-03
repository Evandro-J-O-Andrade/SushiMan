import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../assets/img/logomarca2semfundo.png";
import menuIcon from "../assets/img/menu.png";

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "cardapio", label: "Cardápio" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ];

  // Fechar menu ao clicar fora ou apertar Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const handleClickOutside = (e) => {
      // Verifica se o clique não foi dentro do painel
      if (panelRef.current && !panelRef.current.contains(e.target) && e.target.closest(`.${styles.menuMobileBtn}`) === null) {
        // Verifica se o clique não foi no botão de abrir/fechar
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (onNavigate) onNavigate(id);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO + NOME */}
        <a href="#home" className={styles.logoContainer} onClick={() => handleNavClick("home")}>
          <img src={logo} alt="SushiMan Logo" className={styles.logo} />
          <span className={styles.siteName}>SushiMan</span>
        </a>

        {/* NAV DESKTOP */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* HAMBURGER MOBILE */}
        <button
          className={styles.menuMobileBtn}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* 🎯 CORRIGIDO: Oculta a imagem do menu.png quando o menu está aberto */}
          {!menuOpen && <img src={menuIcon} alt="" />}
        </button>
      </div>

      {/* OVERLAY + PAINEL MOBILE */}
      {menuOpen && (
        <div className={styles.overlay}>
          <aside ref={panelRef} className={styles.panel}>
            <ul className={styles.panelList}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.panelItem}>
                  <a
                    href={`#${item.id}`}
                    className={styles.panelLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}