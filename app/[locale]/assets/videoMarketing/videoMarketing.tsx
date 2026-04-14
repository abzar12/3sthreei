import { getTranslations } from "next-intl/server"
import style from "./videoMarketing.module.css"

// type Props = {
//     contentText: string,
//     videoURL: string
// }
export default async function VideoMarketing(){
    const t = await getTranslations('mediaMarketing')
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.cardText}>
                    <p>{t('contentText')}</p>
                </div>
                <div className={style.mediaSection}>
                    <video src='#' height={200} width={200} autoPlay={false}>
                    </video>
                </div>
            </div>
        </div>
    )
}