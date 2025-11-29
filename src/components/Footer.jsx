import styles from "./Footer.module.css";
import logo from "../assets/img/logomarca2semfundo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { id: "facebook", name: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
    { id: "instagram", name: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
    { id: "whatsapp", name: "WhatsApp", href: "https://wa.me/5511999999999", Icon: FaWhatsapp },
    { id: "twitter", name: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
    { id: "youtube", name: "YouTube", href: "https://youtube.com", Icon: FaYoutube },
  ];

  const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(
    "Olá SushiMan, gostaria de fazer um pedido."
  )}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logo} alt="SushiMan" className={styles.brandLogo} />
          <span className={styles.brandName}>SushiMan</span>
        </div>

        <div className={styles.socialBlock}>
          <h3 className={styles.socialTitle}>Me siga:</h3>
          <ul className={styles.socialList}>
            {socials.map((s) => {
              const Icon = s.Icon;
              return (
                <li key={s.id} className={styles.socialItem}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.iconWrap}>
                      <Icon className={styles.icon} />
                    </span>
                    <span className={styles.socialLabel}>{s.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.copy}>
            © {new Date().getFullYear()} SushiMan. Todos os direitos reservados.
          </div>

          <div className={styles.devRow}>
            <a className={styles.devLink} href="https://newwavesistemasdigital.netlify.app/" target="_blank" rel="noreferrer">
              Desenvolvido por New Wave Sistemas
            </a>
            <span className={styles.devSeparator}>•</span>
            <span className={styles.ceo}>CEO Evandro Andrade</span>
          </div>
        </div>
      </div>

      <a
        className={styles.whatsappBtn}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
