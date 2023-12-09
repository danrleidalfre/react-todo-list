import styles from './App.module.css'

import './global.css'

import logo from '/logo.svg'
import {ListPlus, PlusCircle, Trash} from "phosphor-react";

export function App() {
    return (
        <div>
            <header>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo TODO List"/>
                    <h1>to<span>do</span></h1>
                </div>
            </header>

            <nav>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button>
                    <span>Criar</span>
                    <PlusCircle />
                </button>
            </nav>

            <section>
                <div className={styles.info}>
                    <h2>Tarefas criadas <span>0</span></h2>
                    <h2>Tarefas concluídas <span>0</span></h2>
                </div>
            </section>

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
                            <Trash size={16} />
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
        </div>
    )
}