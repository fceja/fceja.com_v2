import "@scss/components/Cards.scss"

const cardsData = [
    {
        year: '2024 - Present',
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
        <ol className="cards-list p-0">
            {
                cardsData.map((elem, i) => {
                    return (
                        <li key={`li-${i}`} className="mt-3 gap-3 md:flex lg:flex">
                            <div className="card-year" style={{ width: "150px" }}>{elem.year}</div>
                            <div className="card-desc w-100">
                                <div className="card-title">{elem.title}</div>
                                <div className="card-paragraph mt-4">{elem.paragraph}</div>
                                <div className="tags my-3 d-flex flex-wrap">
                                    {elem.tags.map((tagElem) => {
                                        return < span key={`tag-${i}-${tagElem}`} className="p-2 m-1" > {tagElem}</span>
                                    })}
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}
export default Cards
