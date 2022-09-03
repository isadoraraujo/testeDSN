import { Button } from "../Button/Buttons"
import styles from "./header.module.css"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.mensagem}>
        <h4>uma seleção de produtos</h4>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>

      <div className={styles.botoes}>
        <Button type="button" value="Conheça a Linx" />
        <Button type="button" value="Ajude o algorítimo" />
        <Button type="button" value="Seus produtos" />
        <Button type="button" value="Compartilhe" />
      </div>
    </div>
  );
};
