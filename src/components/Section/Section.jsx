import styles from "./section.module.css"
import { Input } from "../Input/Input"

export const Section = () => {
    return (
        <section className={styles.section}>
            <div className={styles.info}>
                <h3>Ajude o algorítimo a ser mais certeiro</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis vero aliquam voluptatem ad, dolore ea doloremque odit laudantium nobis qui in! Velit maiores amet itaque obcaecati rem doloribus eos molestiae.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ex laborum labore totam tempore eveniet dolorum optio, nulla dolores quasi explicabo at incidunt quis ullam nam eaque blanditiis. Sequi, enim!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi velit minus eaque omnis asperiores! Aperiam officiis dicta aspernatur esse minima, adipisci sapiente aliquid rerum alias doloremque veritatis, eos itaque ullam.
                </p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis vero aliquam voluptatem ad, dolore ea doloremque odit laudantium nobis qui in! Velit maiores amet itaque obcaecati rem doloribus eos molestiae.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ex laborum labore totam tempore eveniet dolorum optio, nulla dolores quasi explicabo at incidunt quis ullam nam eaque blanditiis. Sequi, enim!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi velit minus eaque omnis asperiores! Aperiam officiis dicta aspernatur esse minima, adipisci sapiente aliquid rerum alias doloremque veritatis, eos itaque ullam.
                </p>
            </div>
            <form className={styles.form}>
              <Input id="nome" type="text" value="Seu nome:"/>
              <Input id="email" type="email" value="Email:"/>
              <Input id="cpf" type="text" value="CPF:"/>
                <div className={styles.radio}>
                    <input id="generoM" type="radio" name="genero"/>
                    <label htmlFor="generoM">Masculino</label>
                    <input id="generoF" type="radio" name="genero"/>
                    <label htmlFor="generoF">Feminino</label>
                </div>
                <div>
                    <button className={styles.botaoEnviar} type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}