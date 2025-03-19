import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './Projects.module.scss'
import therapistImage from '../../assets/Projects/therapist.gif'

export default function Projects(){
    return(
        <main className={styles.container}>
            <div className={styles.container_text}>
                <p className={styles.container_text_header}>My <span className={styles.container_text_header_active}>Pet Projects</span></p>                
                <div className={styles.container_projects}>
                    <ProjectCard imageSrc={therapistImage} title='Therapist' content='A system monitor that also sends data to a COM port' link='https://github.com/NameOfFool/Therapist'/>
                </div>
            </div>
           
        </main>
    )
}