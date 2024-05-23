import "@scss/components/Projects.scss"
import Tags from "@common/components/Tags"
const projectData = [
    {
        title: 'Profile App',
        paragraph: "A web app that can be used for a user/company profile.",
        tags: [
            "TypeScript", "React JS", "Redux JS", "Bootstrap", "AWS:S3"
        ]
    }
]

const Projects = () => {
    return (
        <section className="projects mt-5">
            <>
                {projectData.map((elem, i) => {
                    return (
                        <div key={`proj-${i}`}>
                            <h2>Projects</h2>
                            <div className={`project-${i} d-flex gap-3 mt-3`}>
                                <div
                                    className="proj-img"
                                    style={{
                                        minWidth: "125px",
                                        height: "100px",
                                        backgroundColor: "lightgray",
                                    }}
                                >[Image container]</div>
                                <div className="proj-desc w-100">
                                    <span className="proj-title">{elem.title}</span>
                                    <span
                                        className="proj-arrow ml-1"
                                        style={{ margin: "0 0 0 10px" }}
                                    >
                                        [Arrow]
                                    </span>
                                    <p className="proj-p mt-4">{elem.paragraph}</p>
                                    <Tags tagData={elem.tags} parentIndex={i} />
                                </div>

                            </div>
                        </div>
                    )
                })}
            </>
        </section>
    )
}
export default Projects