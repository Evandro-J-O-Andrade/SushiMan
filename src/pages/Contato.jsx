import styles from './Contato.module.css';

export default function Contato() {
  return (
    <div className={styles.contatoContainer}>
      <div className={styles.inner}>
        <h2>Contato</h2>
        <p>Faça seu pedido ou dúvidas pelo WhatsApp ou telefone.</p>

        <ul className={styles.infoList}>
          <li><strong>Telefone:</strong> (00) 0000-0000</li>
          <li><strong>WhatsApp:</strong> (11) 99999-9999</li>
          <li><strong>Endereço:</strong> Rua Exemplo, 123</li>
        </ul>
      </div>
    </div>
  );
}