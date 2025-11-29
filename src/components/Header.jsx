import styles from "./Header.module.css";
import logo from "../assets/img/logomarca2semfundo.png";

export default function Header({ onNavigate }) {
  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "cardapio", label: "Cardápio", href: "#cardapio" },
    { id: "sobre", label: "Sobre", href: "#sobre" },
    { id: "contato", label: "Contato", href: "#contato" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO + NOME */}
        <a href="#home" className={styles.logo} onClick={() => onNavigate("home")}>
          <img src={logo} alt="SushiMan Logo" className={styles.logoImg} />
          <h1 className={styles.siteName}>SushiMan</h1>
        </a>

        {/* NAVEGAÇÃO */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
