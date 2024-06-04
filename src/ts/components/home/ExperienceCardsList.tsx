import "@scss/components/home/ExperienceCardsList.scss"
import { experienceCardsContent } from "@content/HomePageContent"
import ExperienceCard from "@components/home/ExperienceCard"

const ExperienceCardsList = () => {
    return (
        <ul className="exp-list p-0">
            {experienceCardsContent.map((elem, i) => {
                {/* generate clients if they exist */ }
                let clients = null;
                if (elem.clients.length > 0) {
                    clients = elem.clients.map((elem2, j) => {
                        return < ExperienceCard cardData={elem2} parentIndex={`${i}-${j}`} />
                    })
                }

                return (
                    <>
                        < ExperienceCard cardData={elem} parentIndex={`${i}`} />
                        {clients && (
                            <>
                                <div className="clients mt-4"><i>VSE Client Engagements</i></div>
                                {clients}
                            </>
                        )}
                    </>
                )
            })}
        </ul>
    )
}
export default ExperienceCardsList