import styles from "./ContentStyles.module.css"

export default function About() {
    return (
        <div className={styles.body}>
            <div>
                <p className={styles.aboutName}>Hello, my name is Daniel</p>
                <p className={styles.content}>I was born in Vietnam</p>
                <p className={styles.content}>Graduated from California State University of Fullerton as a computer science major</p>
                <p className={styles.content}>My favorite foods are Vietnamese food</p>
            </div>
        </div>
    )
}