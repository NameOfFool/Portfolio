import styles from './ProjectCard.module.scss'

interface Props {
    imageSrc: string,
    title: string,
    content: string,
    link:string
}

export default function ProjectCard({ imageSrc, title, content, link }: Props) {
    return (
        <a className={styles.container} href={link} target="_blank">
            <h3 className={styles.container__title}>{title}</h3>
            <img className={styles.container__image} src={imageSrc}/>
            <span className={styles.container__content}>
                {content}
            </span>
        </a>
    )
}