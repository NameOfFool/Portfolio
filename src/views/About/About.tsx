import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'
import { CsharpPlainIcon, NodejsPlainWordmarkIcon, ReactOriginalIcon, MysqlPlainWordmarkIcon } from '@devicon/react'
import { CgCPlusPlus } from 'react-icons/cg'
import { DiJava, DiRust } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

export default function About() {
    const {t} = useTranslation()
    return (
        <main className={styles.container}>
            <div className={styles.container_text}>
                <p className={styles.container_text_header}><span className={styles.container_text_header_active}>{t("about.overview")}</span> {t("about.mySkills")} </p>
                <span>{t("about.annotation")}</span>
            </div>
            <div className={styles.container_skills}>
                <div className={styles.container_skills_item}>
                    <CsharpPlainIcon color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <NodejsPlainWordmarkIcon color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <ReactOriginalIcon color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <MysqlPlainWordmarkIcon color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <CgCPlusPlus color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <SiJavascript color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <DiRust color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <DiJava color='#E91E77' size='64px' />
                </div>
                <div className={styles.container_skills_item}>
                    <TbSql color='#E91E77' size='64px' />
                </div>
            </div>
        </main>
    )
}