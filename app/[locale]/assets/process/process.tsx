import { getTranslations } from "next-intl/server"
import { FaLightbulb, FaCode, FaRocket, FaHandshake, FaPencilRuler, FaClipboardList, FaVial } from "react-icons/fa";
import style from "./process.module.css"
import PhoneProgress from "./PhoneProgress";
import ArrowDownFn from "./ArrowDownBtn";

type CardProps = {
    icon: string,
    title: string,
    content: string
}

async function WorkingProcess() {
    const t = await getTranslations()
    const cards = t.raw("process") as CardProps[]


    return (
        <div className={style.container}>
            <h1 className={style.title}>Our Process</h1>
            {/* --------------------------tablet and laptop--------------------  */}
            <div className={style.cards}>
                {
                    cards.map((item, index) => (
                        <div key={index} className={`${style.card} ${style[`card${index}`]}`}>
                            <div className={style.cardContainer}>
                                <div className={style.icons}>
                                    {index === 0 && <FaLightbulb className={style.icon} />}
                                    {index === 1 && <FaClipboardList className={style.icon} />}
                                    {index === 2 && <FaPencilRuler className={style.icon} />}
                                    {index === 3 && <FaCode className={style.icon} />}
                                    {index === 4 && <FaVial className={style.icon} />}
                                    {index === 5 && <FaRocket className={style.icon} />}
                                    {index === 6 && <FaHandshake className={style.icon} />}
                                </div>
                                <h1 className={style.title}> <span className="text-[1.1rem] text-(--nav-text-color) hover:animate-bounce">{index + 1}</span> {item.title}</h1>
                                <div className={style.content} id={`scroll-container${index}`}>
                                    {/* <div id={`back-section${index}`}></div> */}
                                    <div className="" >
                                        <p>{item.content}</p>
                                        <ArrowDownFn show={`show-section${index}`} contain={`scroll-container${index}`} />
                                    </div>
                                    <div id={`show-section${index}`}></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* --------------------------Phone-------------------------- */}
            <div className={style.Phonecards}>
                <PhoneProgress />
            </div>
        </div>
    )
}
export default WorkingProcess