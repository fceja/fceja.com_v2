import "@scss/components/HomeProjects.scss"
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
    },
    {
        title: 'Profile App II',
        paragraph: "The second web app that can be used for a user/company profile.",
        tags: [
            "TypeScript II", "React JS II", "Redux JS II", "Bootstrap II", "AWS:S3 II"
        ],
        gitHubLink: "https://github.com/fceja/profile_app",
        urlLink: "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com/"
    }
]

const HomeProjects = () => {
    return (
        <section className="home-projects mt-5">
            <h2>Projects</h2>
            {projectData.map((elem, i) => {
                return (
                    <div key={`proj-${i}`}>
                        <div className={`project-${i} gap-3 mt-3 md:flex-row-reverse lg:flex-row-reverse`}>
                            <div className="proj-details w-100 sm:mt-10px">
                                <div className="proj-header d-flex">
                                    <div className="proj-title ">
                                        {elem.title}
                                    </div>
                                    <ProjectLinks gitHubLink={elem.gitHubLink} urlLink={elem.urlLink} />
                                </div>
                                <p className="proj-p mt-4">{elem.paragraph}</p>
                                <Tags tagData={elem.tags} parentIndex={i} />
                            </div>
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
                        </div>
                    </div>
                )
            })}
        </section >
    )
}
export default HomeProjects