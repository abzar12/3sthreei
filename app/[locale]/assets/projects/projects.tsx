import { getTranslations } from "next-intl/server";
import style from "./project.module.css"
import CustomFilters from "@/components/ui/filters/filters";
import Portfolio from "../portfolio/portfolio";
type filtersProps = {
    filter: string
}
export default async function Projects({message}:{message:any}){
    const t = await message.filters
    const filters = t as filtersProps[]
    return (
        <div className={style.container}>
            <div  >
                {/* the childreen of filters. the lower case name will be use to the value */}
                {/* the display type is to render only the specifique section */}
                {/* then customFilter component will will only the specifique type */}
                <CustomFilters childreen={filters} displayType="portfolio" items={message.portfolio}/>
            </div>
        </div>
    )
}