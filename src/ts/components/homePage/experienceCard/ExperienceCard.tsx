import "@scss/components/homePage/ExperienceCard.scss"
import Collapsible from "@common/components/Collapsible"
import { TagLinkI } from "@content/common/TagContent"
import Tags from "@common/components/Tags"

type TExperienceCard = {
    year: string
    position: string
    company: string
    companyUrl: string
    paragraph: string
    tags?: TagLinkI[]
    clients?: TExperienceCard[]
}

interface IExperienceCards {
    cardData: TExperienceCard
    parentIndex: string
}

const ExperienceCards: React.FC<IExperienceCards> = ({ cardData, parentIndex }) => {
    return (
        <li
            key={`li-${parentIndex}`}
            className={`exp-card-${parentIndex} exp-card d-md-flex`}
        >
            <div
                className="card-year"
                style={{ margin: "-2px 0 0 0", minWidth: "125px" }}
            >
                {cardData.year}
            </div>
            <div className="card-desc w-100">
                <div className="card-comp m-0 p-0 d-flex align-items-center">
                    <span className="comp-link">
                        <a className="d-flex align-items-center" href={cardData.companyUrl} target="_blank">
                            {cardData.company}
                            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                            </svg>
                        </a>
                    </span>
                </div>
                <span className="card-position">{cardData.position}</span>
                <Collapsible>
                    <p className="card-p p-1">{cardData.paragraph}</p>
                </Collapsible>
                {cardData.tags &&
                    <Tags className="home-exp" tagData={cardData.tags} parentIndex={Number(parentIndex)} />
                }
            </div>
        </li>
    )
}
export default ExperienceCards
