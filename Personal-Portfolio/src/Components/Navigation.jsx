import styles from "./styles.module.css"

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <a className={styles.navItem} href="#about">About</a>
            <a className={styles.navItem} href="#skills">Skills</a>
            <a className={styles.navItem} href="#contact-infos">Contact Infos</a>
        </div>
    )
}