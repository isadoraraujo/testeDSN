import styles from './footer.module.css'

export const Footer = () => {
    return (
    <footer>
        <div className={styles.linhas}>
            <div className={styles.linhaSecundaria}></div>
            <h3>Compartilhe a novidade</h3>
            <div className={styles.linhaSecundaria}></div>
        </div>
        <p className={styles.paragrafo}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <form className={styles.newsletter}>
            <div className={styles.ordena}>
                <label htmlFor="nome">Nome do seu amigo:</label>
                <input type="text" id="nome"/>
            </div>
            <div className={styles.ordena}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email"/>
            </div>
        </form>
        <button type='submit' className={styles.botaoEnvia}>Enviar agora</button>
    </footer>
    )
}