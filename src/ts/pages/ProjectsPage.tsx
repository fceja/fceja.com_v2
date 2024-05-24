import { Link } from "react-router-dom"

import "@scss/pages/ProjectsPage.scss"
import Tags from "@common/components/Tags"
import ProjectLinks from "@components/ProjectLinks"
import { projectData } from "@content/ProjectContent"

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
                                        </span>
                                    </td>
                                    <td className="t-row-built sm:d-none md:d-none">
                                        <Tags
                                            className={"projects-page"} tagData={elem.tags} parentIndex={i} />
                                    </td>
                                    <td className="t-row-link">
                                        <>
                                            {elem.links.map((linkData, iLink) => {
                                                return (
                                                    <>
                                                        <div key={`link-${i}-${iLink}`} className="d-flex">
                                                            <ProjectLinks className={"projects-page"} linkData={linkData} />
                                                            <span className="sm:d-none md:d-none">
                                                                {linkData.url}

                                                            </span>
                                                        </div>
                                                    </>
                                                )
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