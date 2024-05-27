import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

import "@scss/pages/ProjectsPage.scss"
import { projectData } from "@content/ProjectContent"
import ProjectLinks from "@components/ProjectLinks"
import Tags from "@common/components/Tags"

const Projects = () => {
    const [isRowHovered, setIsRowHovered] = useState({ isHovered: false, rowI: null })
    const rowFirstLinkRef = useRef(null)

    useEffect(() => {
        if (isRowHovered.isHovered) {
            const rowLinks = document.getElementById(`t-row-${isRowHovered.rowI}`)

            if (rowLinks) {
                // find and return first link
                const firstLink = (Array.from(rowLinks.childNodes).find(
                    (elem) => (elem as HTMLElement).id === "row-links"
                )).childNodes[0]

                rowFirstLinkRef.current = firstLink as HTMLElement
                rowFirstLinkRef.current.classList.add('target-icon')
            }
        }

        return () => {
            if (rowFirstLinkRef.current) {
                rowFirstLinkRef.current.classList.remove('target-icon')
            }
        }

    }, [isRowHovered])

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
                        <th className="t-row-proj me-3">Project</th>
                        <th className="t-row-built sm:d-none me-3">Built With</th>
                        <th className="t-row-link">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {projectData.map((proj, i) => {
                            return (
                                <tr
                                    key={`row-${i}`}
                                    className={`t-row-${i} t-row`}
                                    id={`t-row-${i}`}
                                >
                                    <td className="t-row-year py-3">{proj.year}</td>
                                    <td className="t-row-proj me-3">
                                        <span
                                            className="hover-text d-flex flex-start me-3"
                                            onMouseEnter={() => { setIsRowHovered({ isHovered: true, rowI: i }) }}
                                            onMouseLeave={() => { setIsRowHovered({ isHovered: false, rowI: i }) }}
                                        >
                                            {proj.title}
                                        </span>
                                    </td>
                                    <td className="t-row-built sm:d-none">
                                        <Tags
                                            className={"projects-page"} tagData={proj.tags} parentIndex={i} />
                                    </td>
                                    <td id="row-links" className="t-row-link">
                                        {proj.links.map((linkData, iLink) => {
                                            return (
                                                <div key={`link-${i}-${iLink}`} className="d-flex">
                                                    <ProjectLinks className={"projects-page"} linkData={linkData} />
                                                    <span className="sm:d-none md:d-none ms-2">-</span>
                                                    <span className="sm:d-none md:d-none ms-2">{linkData.url}</span>
                                                </div>
                                            )
                                        })}
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