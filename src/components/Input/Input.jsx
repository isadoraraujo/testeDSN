import styles from "./input.module.css"

export const Input = ({ id, value, type }) => {
    return (
        <>
            <label htmlFor={id}>{value}</label>
            <input className={styles.input} type={type} id={id} required/>
        </>
    )
}