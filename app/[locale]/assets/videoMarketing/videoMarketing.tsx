import { getTranslations } from "next-intl/server"
import style from "./videoMarketing.module.css"
import CustomVideoPlayer from "@/components/ui/video/customVideoPlayer"

export default async function VideoMarketing(){
    const t = await getTranslations('mediaMarketing')
    return (
        <section className={style.container}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.content}>
                        <h2 className={style.title}>How We Work</h2>
                        <div className={style.divider}></div>
                        <p className={style.description}>
                            {t('contentText')}
                        </p>
                        <button className={style.cta}>{t('cta')}</button>
                    </div>
                    <div className={style.videoWrapper}>
                        <div className={style.videoContainer}>
                            <CustomVideoPlayer Url="/e-commerce.mov"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}