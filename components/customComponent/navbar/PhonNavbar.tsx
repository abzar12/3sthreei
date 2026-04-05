"use client"
import style from "../navbar/navbar.module.css"
import Link from "next/link"
import { FaBars } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useState } from "react"
export default function PhoneNavbar({home, course, project, about, faq, blog, signin}:any) {
    // const t = useTranslations();
    const [is_active, setIs_active] = useState(false)
    const expand = () => {
        setIs_active((prev)=> !prev)
    }
    return (
        <div className={style.PhoneNav}>
            <button className={style.btnMenu} onClick={expand}> <FaBars/> </button>
            {
                <ul className={`${style.PhoneNavlink} ${is_active && style.active}`}>
                    <li> <Link href='/home'>{home}</Link></li>
                    <li> <Link href='/courses'>{course}</Link></li>
                    <li> <Link href='/projects'>{project}</Link></li>
                    <li> <Link href='/about'>{about}</Link></li>
                    <li> <Link href='/faq'>{faq}</Link></li>
                    <li> <Link href='/blog'>{blog}</Link></li>
                    <li> <Link href='/blog'>{signin}</Link></li>
                </ul>
            }
        </div>
    )
}