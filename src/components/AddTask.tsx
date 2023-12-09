import styles from './AddTask.module.css'

import {PlusCircle} from "phosphor-react";

export function AddTask() {
    return (
        <nav className={styles}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button>
                <span>Criar</span>
                <PlusCircle/>
            </button>
        </nav>
    )
}