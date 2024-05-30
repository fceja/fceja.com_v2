import "@scss/components/home/ExperienceCardsList.scss"
import { experienceCardsContent } from "@content/HomePageContent"
import Tags from "@common/components/Tags"

const ExperienceCardsList = () => {
    return (
        <ul className="exp-list p-0">
            {experienceCardsContent.map((elem, i) => {
                return (
                    <li key={`li-${i}`} className={`exp-li-${i} mt-3 d-md-flex`}>
                        <div
                            className="card-year"
                            style={{ minWidth: "125px" }}
                        >
                            {elem.year}
                        </div>
                        <div className="card-desc w-100">
                            <div className="card-title">{elem.title}</div>
                            <p className="card-p mt-4">{elem.paragraph}</p>
                            <Tags className="home-exp" tagData={elem.tags} parentIndex={i} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
export default ExperienceCardsList
