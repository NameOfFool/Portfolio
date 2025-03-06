import me from '../../assets/me.png'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.container_introducing}>
                <div className={styles.text_container}>
                    <span>Welcome to my portfolio site!</span>
                    <span>I’m Ivan Tikhonov</span>
                    <span>Full stack developer</span>
                </div>
                <img src={me} className={styles.programmer} />
            </div>
        </main >
    )
}