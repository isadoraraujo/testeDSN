import styles from "./button.module.css"

export const Button = ({type, value}) => {
    return <button className={styles.botaoInterno} type={type}>{value}</button>
}