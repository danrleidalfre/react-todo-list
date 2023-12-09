import './global.css'

import {Header} from "./components/Header.tsx";
import {AddTask} from "./components/AddTask.tsx";
import {Info} from "./components/Info.tsx";
import {List} from "./components/List.tsx";

export function App() {
    return (
        <div>
            <Header />
            <AddTask />
            <Info />
            <List />
        </div>
    )
}