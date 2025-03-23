import { useTranslation } from 'react-i18next'
import me from '../../assets/me.png'
import styles from './Home.module.scss'


export default function Home() {
    const {t} = useTranslation();
    return (
        <main className={styles.container}>
            <div className={styles.container_introducing}>
                <div className={styles.text_container}>
                    <span>{t("home.welcome")}</span>
                    <span>{t("home.introducing")}</span>
                    <span>{t("home.profession")}</span>
                </div>
                <img src={me} className={styles.programmer} />
            </div>
        </main >
    )
}