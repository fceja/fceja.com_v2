import "@scss/components/Cards.scss"

const cardsData = [
    {
        year: '2024 - PRESENT',
        title: "Frontend Engineer",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
        tags: [
            "JavaScript", "TypeScript", "React", "Node.js"
        ]
    },
    {
        year: '2022 - 2023',
        title: "Automation Engineer",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
        tags: [
            "Python", "TypeScript"
        ]
    }
]

const Cards = () => {
    return (
        <ol>
            {
                cardsData.map((elem, i) => {
                    return (
                        <li key={`li-${i}`} className="mt-3">
                            <div className="exp-card p-2 gap-3 sm:block md:flex lg:flex">
                                <span className="card-year">{elem.year}</span>
                                <div>

                                    <div className="card-desc">
                                        <div className="card-title">{elem.title}</div>
                                        <div className="card-paragraph mt-3">{elem.paragraph}</div>
                                    </div>
                                    <div className="tags block mt-3">
                                        {elem.tags.map((tagElem) => {
                                            return < span key={`tag-${i}-${tagElem}`} className="py-1 px-2" > {tagElem}</span>
                                        })}
                                    </div>
                                </div>
                            </div >
                        </li>
                    )
                })
            }
        </ol>
    )
}
export default Cards
