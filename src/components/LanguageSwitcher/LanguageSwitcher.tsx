import { useState } from "react";
import { useTranslation } from "react-i18next"
import styles from "./LanguagaSwitcher.module.scss"

export default function LanguageSwitcher(){
    const {i18n} = useTranslation();

    const [currentLang, setCurrentLang] = useState(i18n.languages[0])
    async function changeLang(lang:"en"|"ru") {
        await i18n.changeLanguage(lang)
        setCurrentLang(lang)
    }
    return( 
        <button className={styles.button} onClick={() => changeLang(currentLang=="en"?"ru":"en")}>{currentLang}</button>
    )
}