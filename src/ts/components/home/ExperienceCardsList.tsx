import "@scss/components/home/ExperienceCardsList.scss"
import { experienceCardsContent } from "@content/HomePageContent"
import Tags from "@common/components/Tags"

const ExperienceCardsList = () => {
    return (
        <ul className="exp-list p-0">
            {experienceCardsContent.map((elem, i) => {
                return (
                    <li
                        key={`li-${i}`}
                        className={`exp-card-${i} exp-card d-md-flex`}
                    >
                        <div
                            className="card-year"
                            style={{ margin: "1.5px 0 0 0", minWidth: "125px" }}
                        >
                            {elem.year}
                        </div>
                        <div className="card-desc w-100">
                            <span className="card-title">{elem.title}</span>
                            <p className="card-p m-0 mt-2">{elem.paragraph}</p>
                            <Tags className="home-exp" tagData={elem.tags} parentIndex={i} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
export default ExperienceCardsList
