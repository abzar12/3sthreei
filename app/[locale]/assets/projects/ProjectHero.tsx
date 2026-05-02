import { getTranslations } from "next-intl/server"
import style from "./project.module.css"
export default async function ProjectHero() {
    const t = await getTranslations("ProjectHero")
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#61DAFB] opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400 opacity-10 blur-3xl" />

      {/* Gradient layer */}
      <div className="relative bg-gradient-to-b from-slate-900 via-[#0b1220] to-slate-950">
        <div className="mx-auto flex min-h-[70vh]  flex-col items-center justify-center px-3 sm:px-6 text-center">
          <h1 className="text-4xl text-center font-bold tracking-tight sm:text-6xl">
           {t('headText')}
          </h1>

          <p className="mt-6 max-w-2xl text-slate-300 text-lg">
           {t('subText')}
          </p>

          <div className="mt-10">
            <button className="rounded-xl bg-[#61DAFB] py-3 px-3 font-semibold text-slate-900 transition hover:opacity-90">
              {t('CallToAction')}
            </button>
          </div>
        </div>
      </div>
    </section>
    )
}