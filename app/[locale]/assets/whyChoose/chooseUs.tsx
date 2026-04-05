"use client"
import style from "./chooseUs.module.css"
import { useTranslations } from "next-intl";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react"
type WhyChooseUsItems = {
    headText: string,
    text: string
}
export default function WhyChooseUs() {

    const t = useTranslations()
    const items = t.raw('whyChooseUs') as WhyChooseUsItems[]

    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <div ref={containerRef} className={style.container}>
            
            <div className={style.sticky}>

                <h1 className={style.title}>Why Choose Us</h1>

                <div className={style.cards}>

                    {items.map((item, i) => {

                        const step = 1 / items.length
                        const start = i * step
                        const mid = start + step / 2
                        const end = start + step

                        const opacity = useTransform(
                            scrollYProgress,
                            [start, mid, end],
                            [0, 1, 0]
                        )

                        const x = useTransform(
                            scrollYProgress,
                            [start, mid],
                            [200, 0]
                        )

                        return (
                            <motion.div
                                key={i}
                                className={style.card}
                                style={{ opacity, x }}
                            >
                                <h2 className={style.header}>
                                    {item.headText}
                                </h2>

                                <p className={style.content}>
                                    {item.text}
                                </p>
                            </motion.div>
                        )
                    })}

                </div>

                {/* <Progress items={items} scrollYProgress={scrollYProgress} /> */}

            </div>

        </div>
    )
}