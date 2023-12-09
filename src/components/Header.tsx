import styles from "./Header.module.css";
import logo from '/logo.svg'

export function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="Logo TODO List"/>
                <h1>to<span>do</span></h1>
            </div>
        </header>
    )
}