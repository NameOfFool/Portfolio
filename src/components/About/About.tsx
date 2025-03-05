import styles from './About.module.scss'
import { CsharpPlainIcon, NodejsPlainWordmarkIcon, ReactOriginalIcon, MysqlPlainWordmarkIcon} from '@devicon/react'
import * as styleVars from '../../_vars.scss'

export default function About(){
    return(
        <main className={styles.container}>
            <div className={styles.container_text}>
                <p className={styles.container_text_header}>My Skills <span className={styles.container_text_header_active}>Overview</span></p>                
                <span>My full-stack skills at your service</span>
            </div>
            <div className={styles.container_skills}>
                <CsharpPlainIcon color='#E91E77' size='64px'/>
                <NodejsPlainWordmarkIcon color='#E91E77' size='64px'/>
                <ReactOriginalIcon color='#E91E77' size='64px'/>
                <MysqlPlainWordmarkIcon color='#E91E77' size='64px'/>
            </div>
        </main>
    )
}