import { getTranslations } from "next-intl/server"
import style from "./abouHero.module.css"

export default async function AbouHero({message}: {message:any}) {
    const t = await message.abouthero
    const imageUrl  = t.heroImageUrl || null
    return (
        <div className={style.container}>
            <div className={style.cardImage}>
                <div className={style.darkbackground}></div>
                {
                    imageUrl && imageUrl.length>0  ?
                    <img src={imageUrl} alt={message.heroImageAlt} className={style.image} loading="lazy"/>
                    : 
                    <div className={style.image}></div> 
                }
                <h1 className={style.heroText}>{t.heroText}</h1>
            </div>
        </div>

    )
}