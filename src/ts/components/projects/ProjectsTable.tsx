import { useEffect, useState, useRef } from "react"

import { projectData } from "@content/ProjectContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"

const ProjectsTable = () => {
    const [isRowHovered, setIsRowHovered] = useState({ isHovered: false, rowI: null })
    const linkIconRef = useRef(null)
    const linkUrlRef = useRef(null)

    useEffect(() => {
        if (isRowHovered.isHovered) {
            const rowLinks = document.getElementById(`t-row-${isRowHovered.rowI}`)

            if (rowLinks) {
                // find and return first link
                const firstLink = (Array.from(rowLinks.childNodes).find(
                    (elem) => (elem as HTMLElement).id === "row-links"
                )).childNodes[0]

                const aLink = firstLink.childNodes[0]
                linkIconRef.current = aLink as HTMLElement

                const linkUrl = firstLink.childNodes[firstLink.childNodes.length - 1]
                linkUrlRef.current = linkUrl as HTMLElement

                linkIconRef.current.classList.add('target-highlight', 'target-jump')
                linkUrlRef.current.classList.add('target-highlight')
            }
        }

        return () => {
            if (linkIconRef.current) {
                linkIconRef.current.classList.remove('target-highlight', 'target-jump')
                linkUrlRef.current.classList.remove('target-highlight')
            }
        }

    }, [isRowHovered])

    return (
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
                                            <div key={`link-${i}-${iLink}`} className="proj-links d-flex">
                                                <ProjectLinks
                                                    className={"projects-page"}
                                                    linkData={linkData}
                                                />
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
    )
}
export default ProjectsTable