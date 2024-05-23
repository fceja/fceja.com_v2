import "@scss/components/Cards.scss"
import Tags from "@common/components/Tags"

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
        <ol className="p-0">
            {
                cardsData.map((elem, i) => {
                    return (
                        <li key={`li-${i}`} className={`exp-li-${i} mt-3 gap-3 md:flex lg:flex`}>
                            <div className="card-year" style={{ minWidth: "125px" }}>{elem.year}</div>
                            <div className="card-desc w-100">
                                <div className="card-title">{elem.title}</div>
                                <p className="card-p mt-4">{elem.paragraph}</p>
                                <Tags tagData={elem.tags} parentIndex={i} />
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}
export default Cards
