import React from "react"

import "@scss/components/home/ExperienceCardsList.scss"
import ExperienceCard from "@components/home/ExperienceCard"
import { experienceCardsContent } from "@content/HomePageContent"

const ExperienceCardsList = () => {
    return (
        <ul className="exp-list p-0">
            {experienceCardsContent.map((elem, i) => {
                {/* generate clients if they exist */ }
                let clients = null;
                if (elem.clients && elem.clients.length > 0) {
                    clients = elem.clients.map((elem2, j) => {
                        return (
                            <React.Fragment key={`client-exp-card-${i}-${j}`}>
                                < ExperienceCard cardData={elem2} parentIndex={`${i}-${j}`} />)
                            </React.Fragment>
                        )
                    })
                }

                return (
                    <React.Fragment key={`exp-cards-${i}`}>
                        < ExperienceCard cardData={elem} parentIndex={`${i}`} />
                        {clients && (
                            <>
                                <div className="clients mt-4"><i>VSE Client Engagements</i></div>
                                {clients}
                            </>
                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}
export default ExperienceCardsList