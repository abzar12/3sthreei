"use client"
import { FaFlutter, FaNodeJs, FaReact, FaAngular } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import style from "./heroSVG.module.css"
import { useState } from "react";
export default function HeroSVG() {
    const [switchDesign, SetSwitchDesign] = useState(false)
    return (
        <>
            <div className={style.wrapper}>
                {
                    switchDesign ?
                        <>
                            <svg viewBox="0 0 510 500" className=" absolute top-0 h-full ">
                                {/* <line x1='144' y1='65' x2='500' y2='250' stroke="rgb(97, 218, 251)" /> */}
                                <circle className={style.circle1} cx="143" cy="65" r="7" fill="rgb(97, 218, 251)" />
                                {/* circle 2 and line 2  */}
                                {/* <line x1='85' y1='163' x2='500' y2='250' stroke="rgb(97, 218, 251)" /> */}
                                <circle className={style.circle2} cx="85" cy="163" r="7" fill="rgb(97, 218, 251)" />

                                {/* circle 3 and line 3  */}
                                {/* <line x1='70' y1='260' x2='500' y2='250' stroke="rgb(97, 218, 251)" /> */}
                                <circle className={style.circle3} cx="70" cy="260" r="7" fill="rgb(97, 218, 251)" />

                                {/* circle 4 and line 4  */}
                                {/* <line x1='86' y1='360' x2='500' y2='250' stroke="rgb(97, 218, 251)" /> */}
                                <circle className={style.circle4} cx="80" cy="360" r="7" fill="rgb(97, 218, 251)" />
                                <circle className={style.circle4} cx="80" cy="360" r="7" fill="rgb(97, 218, 251)" />

                                {/* circle 5 and line 5  */}
                                {/* <line x1='140' y1='458' x2='500' y2='250' stroke="rgb(97, 218, 251)" className='opacity-30' /> */}
                                <circle className={style.circle5} cx="140" cy="457" r="7" fill="rgb(97, 218, 251)" />
                                {/* the origin circle */}
                                <circle cx="490" cy="250" r="20" fill="rgb(0, 216, 255)" className={style.Circle} />
                            </svg>
                            <div className={style.icons}>
                                <FaNodeJs className={`${style.icon} ${style.icon1} animate-bounce `} />
                                <FaReact className={`${style.icon} ${style.icon2} animate-spin `} />
                                <FaAngular className={`${style.icon} ${style.icon3}  `} />
                                <RiNextjsLine className={`${style.icon} ${style.icon4} `} />
                                <FaFlutter className={`${style.icon} ${style.icon5}`} />
                            </div>
                        </>
                        :
                        <>
                            <div className={style.icons}>
                                <FaNodeJs className={`${style.icon} ${switchDesign ? style.icon1 : style.NodeJs} `} />
                                <FaReact className={`${style.icon} ${switchDesign ? style.icon2 : style.React}  `} />
                                <FaAngular className={`${style.icon} ${switchDesign ? style.icon3 : style.Angular}  `} />
                                <RiNextjsLine className={`${style.icon} ${switchDesign ? style.icon4 : style.NextJs} `} />
                                <FaFlutter className={`${style.icon} ${switchDesign ? style.icon5 : style.Fluter} `} />
                            </div>
                        </>

                }


            </div>
        </>
    )
}