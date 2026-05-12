"use client"
// import { getLocale } from "next-intl/server"
import { useRouter } from "next/navigation";
import style from "./switchLang.module.css"
import { useEffect, useState } from "react";

interface HeroProps {
    locale: string
}
function SwitchButtonLang({ locale }: HeroProps) {
    const [active, setActive] = useState(locale)
    const router = useRouter()
    const Switchlanguage = () => {
        const newLocale = active === "fr" ? "en" : "fr"

        setActive(newLocale)
        setTimeout(() => {
            if (locale === 'fr') {
                router.push('/en')
            } else {
                router.push('/fr')
            }
        }, 300);

    }
    return (
        <>
            <div className={style.themeBtn} onClick={Switchlanguage}>
                <div className={` ${style.btn} ${active == 'fr' ? 'active ' : "disactive"}`}
                >
                    <span className={style.themeText}>{locale === 'fr' ? 'En' : 'Fr'}</span>
                </div>
            </div>
        </>
    )
}
export default SwitchButtonLang;