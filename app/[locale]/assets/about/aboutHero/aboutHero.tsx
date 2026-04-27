import { getTranslations } from "next-intl/server"
import style from "./abouHero.module.css"

export default async function AbouHero() {
    const t = await getTranslations('abouthero')
    const imageUrl  = t('heroImageUrl') || null
    return (
        <div className={style.container}>
            <div className={style.cardImage}>
                <div className={style.darkbackground}></div>
                {
                    imageUrl && imageUrl.length>0  ?
                    <img src={imageUrl} alt={t('heroImageAlt')} className={style.image} loading="lazy"/>
                    : 
                    <div className={style.image}></div> 
                }
                <h1 className={style.heroText}>{t('heroText')}</h1>
            </div>
        </div>

    )
}