import styles from './Sobre.module.css';

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <div className={styles.inner}>
        <h2>Sobre o SushiMan</h2>
        <p>
          No SushiMan valorizamos ingredientes frescos e preparo artesanal.
          Nossa equipe traz receitas tradicionais com toque contemporâneo.
        </p>
      </div>
    </div>
  );
}