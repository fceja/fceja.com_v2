import { Link } from "react-router-dom"

import "@scss/pages/ProjectsPage.scss"
import Tags from "@common/components/Tags"
import ProjectLinks from "@components/ProjectLinks"

const projectData = [
    {
        year: "2023",
        name: "Emerson Collective",
        tags: ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"],
        links: [
            { type: "github", url: "https://github.com/fceja/profile_app" },
            { type: "website", url: "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com/" }
        ]
    },
    {
        year: "2023",
        name: "Emerson Collective II",
        tags: ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"],
        links: [
            { type: "github", url: "https://github.com/fceja/profile_app" },
        ]
    },
    {
        year: "2023",
        name: "Emerson Collective III",
        tags: ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"],
        links: [
            { type: "website", url: "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com/" }
        ]
    }
]

const Projects = () => {
    return (
        <div className="projects-page p-4">
            <div className="heading">
                <Link to="/">Homepage</Link>
                <h1>All Projects</h1>
            </div>
            <table className="table-data">
                <thead className="t-row">
                    <tr>
                        <th className="t-row-year py-3 pe-4">Year</th>
                        <th className="t-row-proj">
                            Project
                        </th>
                        <th className="t-row-built sm:d-none md:d-none">Built With</th>
                        <th className="t-row-link sm:d-none">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {projectData.map((elem, i) => {
                            return (
                                <tr key={`row-${i}`} className={`t-row-${i} t-row`}>
                                    <td className="t-row-year py-3">{elem.year}</td>
                                    <td className="t-row-proj">
                                        <span className="hover-text d-flex flex-start">
                                            {elem.name}
                                            <span className="md:d-none lg:d-none">
                                                <ProjectLinks className={"projects-page"} linkData={elem.links} />
                                            </span>
                                        </span>
                                    </td>
                                    <td className="t-row-built sm:d-none md:d-none">
                                        <Tags
                                            className={"projects-page"} tagData={elem.tags} parentIndex={i} />
                                    </td>
                                    <td className="t-row-link sm:d-none">
                                        <ProjectLinks className={"projects-page"} linkData={elem.links} />
                                        <>
                                            {elem.links.map((linkData) => {
                                                return <div className="hover-text">
                                                    {linkData.url}
                                                </div>
                                            })
                                            }
                                        </>
                                    </td>
                                </tr>
                            )
                        })}
                    </>
                </tbody>
            </table>
        </div>
    )
}
export default Projects