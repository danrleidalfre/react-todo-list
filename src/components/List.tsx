import styles from "./List.module.css";
import {ListPlus, Trash} from "phosphor-react";

export function List() {
    return (
        <main>
            <div className={styles.list}>
                <article>
                    <input id="checkbox" type="checkbox"/>
                    <label htmlFor="checkbox"/>
                    <h3>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Integer urna interdum
                        massa libero auctor neque turpis turpis semper.
                    </h3>
                    <button>
                        <Trash size={16}/>
                    </button>
                </article>
            </div>
            <section className={styles.listEmpty}>
                <ListPlus weight="thin"/>
                <h4>
                    Você ainda não tem tarefas cadastradas
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </h4>
            </section>
        </main>
    )
}