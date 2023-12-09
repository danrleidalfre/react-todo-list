import styles from "./Info.module.css";

export function Info() {
    return (
        <section className={styles.info}>
            <h2>Tarefas criadas <span>0</span></h2>
            <h2>Tarefas concluídas <span>0</span></h2>
        </section>
    )
}