import About from "./Contents/About.jsx"
import styles from "./styles.module.css"
import Skills from "./Contents/Skills.jsx"
import Contact from "./Contents/Contact.jsx"

export default function Body() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.aboutLeftPicture}>
                    <img src="src/Assests/CSUF_pic.jpeg" className={styles.scaleImage}/>
                </div>
                <div className={styles.aboutRightPicture}>
                    <img src="src/Assests/Vietnamese_foods_pic.jpeg" className={styles.scaleImage}/>
                </div>
                <div className={styles.skillsPicture}>
                    <img src="src/Assests/programming_image.jpeg" className={styles.scaleImage}/>
                </div>
                <div className={styles.contactInfoPicture}>
                    <img src="src/Assests/github_image.png" className={styles.scaleImage}/>
                </div>
            </div>
            <div className={styles.separatorBox}>
                <h5 id="about" className={styles.separatorTitle}>About me</h5>
                <h5 id="skills" className={styles.separatorTitle}>Skills</h5>
                <h5 id="contact-infos" className={styles.separatorTitle}>Contact Info</h5>
            </div>
            <div>
                <About/>
                <Skills/>
                <Contact/>
            </div>
        </div>
    )
}