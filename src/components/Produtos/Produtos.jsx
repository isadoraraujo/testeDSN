import styles from "./produto.module.css"

export const Produtos = ({name, image, description, oldPrice, price}) => {
    return (
        <>
            <div className={styles.quadrado}><img src={image}/></div>
            <div className={styles.descricaoProduto}>
                <p>{name}</p>
                <p>{description}</p>
                <p>{oldPrice}</p>
                <p>{price}</p>
                <p>{price/2}</p>
                <input type="button" value="Comprar"/>
            </div>
        </>
    )
}