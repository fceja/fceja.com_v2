import "@scss/components/home/ExperienceCards.scss"
import { experienceCardsContent } from "@content/HomeContent"
import Tags from "@common/components/Tags"

const ExperienceCardsList = () => {
    return (
        <ol className="p-0">
            {
                experienceCardsContent.map((elem, i) => {
                    return (
                        <li key={`li-${i}`} className={`exp-li-${i} mt-3 md:flex lg:flex`}>
                            <div className="card-year" style={{ minWidth: "125px" }}>{elem.year}</div>
                            <div className="card-desc w-100">
                                <div className="card-title">{elem.title}</div>
                                <p className="card-p mt-4">{elem.paragraph}</p>
                                <Tags className="experience" tagData={elem.tags} parentIndex={i} />
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}
export default ExperienceCardsList
