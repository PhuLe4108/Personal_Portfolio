import styles from "./ContentStyles.module.css"

export default function Skills() {
    return (
        <div className={styles.body}>
            <p className={styles.content}>List of programming languages I know:</p>
            <p className={styles.content}>C/C++</p>
            <p className={styles.content}>Python</p>
            <p className={styles.content}>Swift</p>
            <p className={styles.content}>A little bit of JavaScript</p>
        </div>
    )
}