import "@scss/components/ProjectsTable.scss"
import { projectContent } from "@content/ProjectsPageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHightlightJump"

const ProjectsTable = () => {
    const setIsRowHovered = useHighlightJump()

    return (
        <table className="table-data w-100">
            <thead className="th-row">
                <tr>
                    <th className="th-year py-3 pe-4">Year</th>
                    <th className="th-proj me-3">Project</th>
                    <th className="th-built d-none d-md-table-cell  me-5">Built With</th>
                    <th className="th-link">Link</th>
                </tr>
            </thead>
            <tbody>
                {projectContent.map((proj, i) => {
                    return (
                        <tr
                            key={`tr-${i}`}
                            className={`tr tr-${i}`}
                            id={`tr-${i}`}
                        >
                            <td className="tr-year py-3">{proj.year}</td>
                            <td className="tr-proj">
                                <span
                                    className="hover-text d-flex flex-start me-3"
                                    onMouseEnter={() => { setIsRowHovered({ isHovered: true, rowI: i }) }}
                                    onMouseLeave={() => { setIsRowHovered({ isHovered: false, rowI: i }) }}
                                >
                                    {proj.title}
                                </span>
                            </td>
                            <td
                                className="tr-built d-none d-md-table-cell"
                                style={{ maxWidth: "250px" }}
                            >
                                <Tags
                                    className={"projects-table"} tagData={proj.tags} parentIndex={i} />
                            </td>
                            <td
                                id="tr-links"
                                className="tr-links"
                                style={{ maxWidth: "300px" }}
                            >
                                {proj.links.map((linkData, iLink) => {
                                    return (
                                        <div
                                            key={`link-${i}-${iLink}`}
                                            className="proj-link d-flex"
                                        >
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
