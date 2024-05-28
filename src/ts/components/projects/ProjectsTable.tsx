import "@scss/components/ProjectsTable.scss"
import { projectContent } from "@content/ProjectsPageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHightlightJump"

const ProjectsTable = () => {
    const setIsRowHovered = useHighlightJump()

    return (
        <table className="table-data">
            <thead className="t-row t">
                <tr>
                    <th className="t-row-year py-3 pe-4">Year</th>
                    <th className="t-row-proj me-3">Project</th>
                    <th className="t-row-built d-sm-none me-5">Built With</th>
                    <th className="t-row-link">Link</th>
                </tr>
            </thead>
            <tbody>
                {projectContent.map((proj, i) => {
                    return (
                        <tr
                            key={`row-${i}`}
                            className={`t-row-${i} t-row`}
                            id={`t-row-${i}`}
                        >
                            <td className="t-row-year py-3">{proj.year}</td>
                            <td className="t-row-proj">
                                <span
                                    className="hover-text d-flex flex-start me-3"
                                    onMouseEnter={() => { setIsRowHovered({ isHovered: true, rowI: i }) }}
                                    onMouseLeave={() => { setIsRowHovered({ isHovered: false, rowI: i }) }}
                                >
                                    {proj.title}
                                </span>
                            </td>
                            <td className="t-row-built d-sm-none">
                                <Tags
                                    className={"projects-table"} tagData={proj.tags} parentIndex={i} />
                            </td>
                            <td id="row-links" className="t-row-link">
                                {proj.links.map((linkData, iLink) => {
                                    return (
                                        <div
                                            key={`link-${i}-${iLink}`}
                                            className="proj-links d-flex">
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
            </tbody>
        </table>
    )
}
export default ProjectsTable