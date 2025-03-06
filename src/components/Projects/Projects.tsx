import styles from './Projects.module.scss'

export default function Projects(){
    return(
        <main className={styles.container}>
            <div className={styles.container_text}>
                <p className={styles.container_text_header}>My <span className={styles.container_text_header_active}>Pet Projects</span></p>                
                <span>This section is under development now...</span>
            </div>
           
        </main>
    )
}