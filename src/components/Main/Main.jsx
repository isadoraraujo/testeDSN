import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Produtos } from "../Produtos/Produtos"
import styles from "./main.module.css"


export const Main = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function getProdutos() {
            const dados = await api.get("?page=1")
            setProdutos(dados.data.products)
        } getProdutos()
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.divLinha}>
                <div className={styles.linha}></div>
                <p>Sua seleção especial</p>
                <div className={styles.linha}></div>
            </div>
            <section className={styles.sessaoProdutos}>
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
                
            </section>

            <button>Ainda mais produtos aqui!</button>
        </main>
    )
}