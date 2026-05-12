"use client"
import style from "../navbar/navbar.module.css"
import Link from "next/link"
import { FaBars, FaCode, FaGamepad, FaMobileAlt, FaPalette } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react"
import { NavbarProps } from "./Navbar";
export default function PhoneNavbar({ home, keyService, servicesValue, project, about, faq, blog, signin }: NavbarProps) {
    // const t = useTranslations();
    const [is_active, setIs_active] = useState(false)
    const [openServices, setOpenServices] = useState(false)
    const serviceFn = () => {
        setOpenServices(!openServices)
    }
    const expand = () => {
        setIs_active((prev) => !prev)
    }
    return (
        <div className={style.PhoneNav}>
            <button className={style.btnMenu} onClick={expand}> <FaBars /> </button>
            {
                <div className={`${style.PhonenavCard} ${is_active && style.active}`} onClick={expand}>
                    <ul className={`${style.PhoneNavlink}`}>
                        <li > <Link href='/'>{home}</Link></li>
                        <div className={style.li} onClick={serviceFn}>
                            {/* <Link href='/service' > */}
                            {keyService} <TiArrowSortedDown className={`${style.icon} ${openServices ? style.open : ''}`} />
                            {
                                // openServices && (
                                    <div className={`${style.PhoneServiceDropdown} ${openServices ? style.open : ''}`}>
                                        {
                                            servicesValue.map((service, index) => {
                                                const icons = [<FaCode />, <FaMobileAlt />, <FaGamepad />, <FaPalette />];
                                                return (
                                                    <li key={service} className={style.PhoneserviceItem}>
                                                        <Link href='/projects' className={style.PhoneServiceLink}>
                                                            {icons[index]} {service}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </div>
                                // )
                            }
                            {/* </Link> */}
                        </div>
                        <li> <Link href='/projects'>{project}</Link></li>
                        <li> <Link href='/about'>{about}</Link></li>
                        <li> <Link href='/faq'>{faq}</Link></li>
                        <li> <Link href='/blog'>{blog}</Link></li>
                        <li> <Link href='/blog'>{signin}</Link></li>
                    </ul>
                </div>

            }
        </div>
    )
}