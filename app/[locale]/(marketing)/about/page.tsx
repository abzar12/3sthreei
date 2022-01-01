import { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import AbouHero from "../../assets/about/aboutHero/aboutHero";
import AboutUs from "../../assets/about/aboutUs/aboutUs";
import { NextIntlClientProvider } from "next-intl";

interface Props {
    params: Promise<{ locale: string }>;
}
export async function generateMetadata(params: Promise<{ locale: any }>): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "common" })
    return {
        title: t("about.title"),
        description: t('about.description'),
        keywords: t.raw('about.keywords').join(', '),
        openGraph: {
            title: t("about.title"),
            description: t('about.description'),
            siteName: t('sitename'),
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/about`
        },
        alternates: {
            canonical: `/${locale}/about`
        }
    }
}
export default async function AboutUS({ params }: Props) {
    const { locale } = await params
    const message = (await import(`@/messages/${locale}/about.json`)).default;
    console.log("**********about page is has been rendere************")
    return (
        <NextIntlClientProvider messages={message}>
            {/* -------------------about hero section */}
            <section>
                <AbouHero message={message}/>
            </section>
            <section>
                <AboutUs message={message}/>
            </section>
        </NextIntlClientProvider>
    )
}