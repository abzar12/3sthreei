"use client"
// import { getLocale } from "next-intl/server"
import { useRouter } from "next/navigation";
import "./switchLang.css"
import { useEffect, useState } from "react";
function SwitchButtonTheme({ locale }: any) {
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
            <div className="border border-(--theme-btn-color) h-6 w-12 bg-(--theme-btn-color) rounded-full text-center cursor-pointer" onClick={Switchlanguage}>
                <div className={` btn ${active == 'fr' ? 'active ' : "disactive"}`}
                >
                    <span className=" text-(--theme-btn-color) text-sm absolute left-0.5 font-bold">{locale === 'fr' ? 'En' : 'Fr'}</span>
                </div>
            </div>
        </>
    )
}
export default SwitchButtonTheme;