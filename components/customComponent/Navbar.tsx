import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import SwitchButtonTheme from "../ui/customButton/switchLang";
export default async function Navbar() {
    const t = await getTranslations('navbar')
    const locale = await getLocale()
    return (
        <nav className="flex justify-around px-5 py-2">
            <div className="py-2">
                <h1>My Logo</h1>
            </div>
            <ul className="flex justify-between gap-5 border border-(--nav-bg-color) text-(--nav-text-color) px-5 py-2 rounded-full ">
                <li> <Link href='/home'>{t('home')}</Link></li>
                <li> <Link href='/courses'>{t('course')}</Link></li>
                <li> <Link href='/projects'>{t('project')}</Link></li>
                <li> <Link href='/about'>{t('about')}</Link></li>
                <li> <Link href='/faq'>{t('faq')}</Link></li>
                <li> <Link href='/blog'>{t('blog')}</Link></li>
                <li> <Link href='/blog'>{t('signin')}</Link></li>
            </ul>
            <div className="pt-3 text-center flex gap-5">
                {/* button for theme */}
                <SwitchButtonTheme locale= {locale} />
                {/* button to switch language  */}
                <div className="border h-5 w-14">

                </div>
            </div>
        </nav>
    );
}