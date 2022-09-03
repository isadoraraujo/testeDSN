import styles from "./produto.module.css"

export const Produtos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.quadrado}><img/></div>
            <div className={styles.descricaoProduto}>
                <p>Nome do produto</p>
                <p>Descrição</p>
                <p>Valor</p>
                <p>Valor com desconto</p>
                <p>Parcela</p>
                <input type="button" value="Comprar"/>
            </div>
        </div>
    )
}