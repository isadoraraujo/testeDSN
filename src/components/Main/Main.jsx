import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Produtos } from "../Produtos/Produtos"
import styles from "./main.module.css"

export const Main = () => {
    const [produtos, setProdutos] = useState([])
    const [produtosPaginaDois, setProdutosPaginaDois] = useState([])
    const [isSessaoProdutoCompleta, setIsSessaoProdutoCompleta] = useState(false)

    useEffect(() => {
        async function getProdutos() {
            const dados = await api.get("?page=1")
            setProdutos(dados.data.products)
        } getProdutos()
    }, [])

    useEffect(() => {
        async function getProdutosDois() {
            const dados = await api.get("?page=2")
            setProdutosPaginaDois(dados.data.products)
        } getProdutosDois()
    }, [])

    function handleProdutos() {
        setIsSessaoProdutoCompleta(!isSessaoProdutoCompleta)        
    }

    return (
        <main className={styles.main}>
            <div className={styles.divLinha}>
                <div className={styles.linha}></div>
                <p>Sua seleção especial</p>
                <div className={styles.linha}></div>
            </div>
            <section className={isSessaoProdutoCompleta === true ? styles.sessaoProdutosCompleta : styles.sessaoProdutos}>
                <div className={styles.produtos}>
                    {produtos.map((produto) => {
                        return (
                            <div key={produto.id} className={styles.container}>
                                <Produtos 
                                    name = {produto.name}
                                    image = {produto.image}
                                    description = {produto.description}
                                    oldPrice = {produto.oldPrice}
                                    price = {produto.price}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className={isSessaoProdutoCompleta === true ? styles.produtos : styles.produtosHidden}>
                    {produtosPaginaDois.map((produto) => {
                        return (
                            <div key={produto.id} className={styles.container}>
                                <Produtos 
                                    name = {produto.name}
                                    image = {produto.image}
                                    description = {produto.description}
                                    oldPrice = {produto.oldPrice}
                                    price = {produto.price}
                                />
                            </div>
                        )
                    })}
                </div>
                
            </section>

            <button onClick={handleProdutos}>Ainda mais produtos aqui!</button>
        </main>
    )
}