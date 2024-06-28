import "@scss/components/projects/ProjectsTable.scss"
import InfoTooltip from "@components/projects/InfoTooltip"
import { projectContent } from "@content/ProjectsPageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHighlightJump"

const COMMON_COMPONENT_CLASSNAME = 'projects-proj'

const ProjectsTable = () => {
    const setIsTriggerElemHovered = useHighlightJump()

    const handleHover = (isHovered: boolean, rowI: number) => {
        const targetLink = document.querySelector(`.tr-proj-link-${rowI}-0`)
        setIsTriggerElemHovered({ isHovered: isHovered, targetElem: targetLink })
    }

    return (
        <table className="table-data w-100">
            <thead className="th-row">
                <tr>
                    <th className="th-year">Year</th>
                    <th
                        className="th-proj"
                        style={{ minWidth: "150px" }}
                    >
                        Project
                    </th>
                    <th
                        className="th-built d-none d-md-table-cell  me-5"
                        style={{ maxWidth: "500px" }}
                    >
                        Built With
                    </th>
                    <th className="th-link">Link</th>
                </tr>
            </thead>
            <tbody>
                {projectContent.map((proj, i) => {
                    return (
                        <tr
                            id={`tr-${i}`}
                            key={`tr-${i}`}
                            className={`tr tr-${i}`}
                        >
                            <td className="tr-year pe-4 py-2">{proj.year}</td>
                            <td className="tr-proj pe-2 py-2 ">
                                <span
                                    className="tr-proj-title hover-text me-4"
                                    onMouseEnter={() => { handleHover(true, i) }}
                                    onMouseLeave={() => { handleHover(false, i) }}
                                ><a href={proj.links[0].url} target="_blank" rel="noreferrer">{proj.title}</a>
                                </span>
                                <hr></hr>
                                <span className="tr-proj-type d-flex align-items-center">
                                    {proj.projType}
                                    <InfoTooltip message={proj.tooltipMessage} />
                                </span>
                            </td>
                            <td className="tr-built d-none d-md-table-cell py-2">
                                <Tags className={COMMON_COMPONENT_CLASSNAME} tagData={proj.tags} parentIndex={i} />
                            </td>
                            <td
                                id="tr-links"
                                className="tr-links pe-2 py-2"
                            >
                                {proj.links.map((linkData, j) => {
                                    return (
                                        <div
                                            key={`link-${i}-${j}`}
                                            className={`tr-proj-link-${i}-${j} tr-proj-link d-flex`}
                                        >
                                            <ProjectLinks className={COMMON_COMPONENT_CLASSNAME} linkData={linkData} />
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
