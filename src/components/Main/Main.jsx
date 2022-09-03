import { Produtos } from "../Produtos/Produtos"
import styles from "./main.module.css"

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.divLinha}>
                <div className={styles.linha}></div>
                <p>Sua seleção especial</p>
                <div className={styles.linha}></div>
            </div>
            <section className={styles.sessaoProdutos}>
                <div className={styles.produtos}>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                </div>
                <div className={styles.produtos}>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                </div>
            </section>

            <button>Ainda mais produtos aqui!</button>
        </main>
        
    )
}