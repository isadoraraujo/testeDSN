import styles from "./produto.module.css"

export const Produtos = ({name, image, description, oldPrice, price}) => {
    return (
        <>
            <div className={styles.quadrado}><img src={image}/></div>
            <div className={styles.descricaoProduto}>
                <p>{name}</p>
                <p>{description}</p>
                <p>{new Intl.NumberFormat("pt-BR", {
                    style: "currency", 
                    currency: "BRL"
                }).format(oldPrice)}</p>
                <p>{new Intl.NumberFormat("pt-BR", {
                    style: "currency", 
                    currency: "BRL"
                }).format(price)}</p>
                <p>2 x de {new Intl.NumberFormat("pt-BR", {
                    style: "currency", 
                    currency: "BRL"
                }).format(price/2)}</p>
                <input type="button" value="Comprar"/>
            </div>
        </>
    )
}