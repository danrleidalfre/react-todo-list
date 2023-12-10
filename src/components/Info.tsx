import styles from "./Info.module.css";

export function Info() {
    return (
        <section className={styles.info}>
            <h2>Criadas <span>0</span></h2>
            <h2>Concluídas <span>0</span></h2>
        </section>
    )
}