import styles from "./Heros.module.css";
import banner from "../assets/img/banner.png";

export default function Heros() {
  return (
    <section className={styles.hero}>
      {/* 1. CONTAINER DO BANNER (FUNDO) */}
      <div className={styles.bannerWrapper}>
        <img src={banner} alt="Banner SushiMan" className={styles.banner} />
      </div>
      
      {/* 2. OVERLAY (Escurece o fundo para o texto aparecer) */}
      <div className={styles.overlay}></div> 

      {/* 3. CONTEÚDO PRINCIPAL (Frente) */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Bem-vindo ao <span className={styles.highlight}>SushiMan</span>
        </h1>

        <p className={styles.subtitle}>
          Autêntica culinária japonesa preparada com amor e tradição
        </p>

        <div className={styles.buttons}>
          <a href="#cardapio" className={styles.btnPrimary}>
            Ver Cardápio
          </a>
          <a href="#contato" className={styles.btnSecondary}>
            Fazer Pedido
          </a>
        </div>
      </div>
    </section>
  );
}