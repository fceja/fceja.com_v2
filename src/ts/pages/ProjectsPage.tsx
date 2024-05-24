import { Link } from "react-router-dom"

import "@scss/pages/ProjectsPage.scss"
import Tags from "@common/components/Tags"

const parentIndex = 1

const projectData = [
    {
        year: "2023",
        name: "Emerson Collective",
        tags: ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"],
        link: "www.facebook.com"
    },
    {
        year: "2023",
        name: "Emerson Collective II",
        tags: ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"],
        link: "www.facebook.com"
    },
    {
        year: "2023",
        name: "Emerson Collective III",
        tags: ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"],
        link: "www.facebook.com"
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
                        <th className="t-row-built sm:d-none">Built With</th>
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
                                        <span className="hover-text">
                                            {elem.name}
                                        </span>
                                    </td>
                                    <td className="t-row-built sm:d-none">
                                        <Tags
                                            tagData={elem.tags} parentIndex={parentIndex} />
                                    </td>
                                    <td className="t-row-link sm:d-none">
                                        <span className="hover-text">
                                            {elem.link}
                                        </span>
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