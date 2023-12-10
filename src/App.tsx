import logo from '/logo.svg'
import {ListPlus, PlusCircle, Trash} from "phosphor-react";
import { v4 as uuidv4 } from 'uuid'

import styles from './App.module.css'
import {ChangeEvent, FormEvent, useState} from "react";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export function App() {
    const [tasks, setTask] = useState<Task[]>([])
    const [newTitleText, setNetTitleText] = useState('')

    function handleNewTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setNetTitleText(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        const task: Task = {
            id: uuidv4(),
            title: newTitleText,
            completed: false,
        }

        setTask([...tasks, task])
        setNetTitleText('')
    }

    const quantityTasksCreated = tasks.length

    return (
        <div>
            <header>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo TODO List"/>
                    <h1>to<span>do</span></h1>
                </div>
            </header>

            <form onSubmit={handleCreateNewTask}>
                <input
                    onChange={handleNewTitleChange}
                    value={newTitleText}
                    name="title"
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />
                <button type="submit">
                    <span>Criar</span>
                    <PlusCircle />
                </button>
            </form>

            <section>
                <div className={styles.info}>
                    <h2>Criadas <span>{quantityTasksCreated}</span></h2>
                    <h2>Concluídas <span>0</span></h2>
                </div>
            </section>

            <main>
                <div className={styles}>
                    {tasks.map(task => {
                        return (
                            <article key={task.id}>
                                <input id="checkbox" type="checkbox" defaultChecked={task.completed} />
                                <label htmlFor="checkbox" />
                                <h3>{task.title}</h3>
                                <button>
                                    <Trash size={16} />
                                </button>
                            </article>
                        )
                    })}
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