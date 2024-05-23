import "@scss/components/Projects.scss"
import Tags from "@common/components/Tags"
import ProjectLinks from "@components/ProjectLinks"

const projectData = [
    {
        title: 'Profile App',
        paragraph: "A web app that can be used for a user/company profile.",
        tags: [
            "TypeScript", "React JS", "Redux JS", "Bootstrap", "AWS:S3"
        ],
        gitHubLink: "https://github.com/fceja/profile_app",
        urlLink: "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com/"
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
                            <div className={`project-${i} gap-3 mt-3 md:flex lg:flex`}>
                                <div
                                    className="proj-img"
                                    style={{
                                        backgroundColor: "lightgray",
                                        height: "100px",
                                        minWidth: "125px",
                                        maxWidth: "125px",
                                    }}
                                >
                                    [Image container]
                                </div>
                                {<div className="proj-details w-100 sm:mt-10px">
                                    <div className="proj-header d-flex">
                                        <div className="proj-title ">
                                            {elem.title}
                                        </div>
                                        <ProjectLinks gitHubLink={elem.gitHubLink} urlLink={elem.urlLink} />
                                    </div>
                                    <p className="proj-p mt-4">{elem.paragraph}</p>
                                    <Tags tagData={elem.tags} parentIndex={i} />
                                </div>}

                            </div>
                        </div>
                    )
                })}
            </>
        </section >
    )
}
export default Projects