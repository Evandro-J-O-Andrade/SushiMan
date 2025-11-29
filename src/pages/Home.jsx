import styles from "./Home.module.css";
import bannerBg from "../assets/img/banner.png";

export default function Home() {
  return (
    <div className={styles.heroContainer} style={{
      backgroundImage: `url(${bannerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      {/* Overlay escuro para melhor legibilidade */}
      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>
        {/* TEXTO HERO - SEM LOGO */}
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Bem-vindo ao <span className={styles.highlight}>SushiMan</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Autêntica culinária japonesa preparada com amor e tradição
          </p>

          <div className={styles.ctaButtons}>
            <a href="#cardapio" className={styles.btnPrimary}>
              Ver Cardápio
            </a>
            <a href="#contato" className={styles.btnSecondary}>
              Fazer Pedido
            </a>
          </div>
        </div>

        {/* DECORAÇÃO FLUTUANTE */}
        <div className={styles.decoration}>
          <div className={styles.decorItem}>🥢</div>
          <div className={styles.decorItem}>🍣</div>
          <div className={styles.decorItem}>🍜</div>
        </div>
      </div>
    </div>
  );
}
