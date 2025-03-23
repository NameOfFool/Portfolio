import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './Projects.module.scss'
import therapistImage from '../../assets/Projects/therapist.gif'
import { useTranslation } from 'react-i18next'

export default function Projects(){
    const {t} = useTranslation()
    return(
        <main className={styles.container}>
            <div className={styles.container_text}>
                <p className={styles.container_text_header}>{t("projects.my")} <span className={styles.container_text_header_active}>{t("projects.petProjects")}</span></p>                
                <div className={styles.container_projects}>
                    <ProjectCard imageSrc={therapistImage} title='Therapist' content={t("projects.therapitsDescription")} link='https://github.com/NameOfFool/Therapist'/>
                </div>
            </div>
           
        </main>
    )
}