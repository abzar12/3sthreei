import { getTranslations } from "next-intl/server"
import style from "./serviceStyle.module.css"

export default async function OurService() {
    const t = await getTranslations('serviceSection')
    return (
        <>
            <div className={style.container}>
                <h1 className={style.title}>Ours Services</h1>
                <div className={style.cards}>
                    {/* website */}
                    <div className={`${style.card} ${style.card1}`}>
                        <h1 className={style.card_title}>{t('website.title')}</h1>
                        <h2 className={style.card_subtitle}>{t('website.subtitle')}</h2>
                        <ul className={style.content}>
                            {t.raw('website.contents').map((item:string, index:number)=>(
                                <li key={index} className={style.content_text}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* mobile app */}
                    <div className={`${style.card} ${style.card2}`}>
                        <h1 className={style.card_title}>{t('mobile.title')}</h1>
                        <h2 className={style.card_subtitle}>{t('mobile.subtitle')} </h2>
                        <ul className={style.content}>
                            {t.raw('mobile.contents').map((item:string, index:number)=>(
                                <li key={index} className={style.content_text}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* gaming */}
                    <div className={`${style.card} ${style.card3}`}>
                        <h1 className={style.card_title}>{t('game.title')}</h1>
                        <h2 className={style.card_subtitle}>{t('game.subtitle')}</h2>
                        <ul className={style.content}>
                            {t.raw('game.contents').map((item:string, index:number) => (
                                <li key={index} className={style.content_text}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* ui/ux */}
                    <div className={`${style.card} ${style.card4}`}>
                        <h1 className={style.card_title}>{t('design.title')}</h1>
                        <h2 className={style.card_subtitle}>{t('design.subtitle')}</h2>
                        <ul className={style.content}>
                            {t.raw('design.contents').map((item:string, index:number)=>(
                                <li key={index} className={style.content_text}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}