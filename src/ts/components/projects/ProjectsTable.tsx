import "@scss/components/projects/ProjectsTable.scss"
import { projectContent } from "@content/ProjectsPageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHighlightJump"

const COMMON_COMPONENT_CLASSNAME = 'projects-proj'

const ProjectsList = () => {
    const setIsTriggerElemHovered = useHighlightJump()

    const handleHover = (isHovered: boolean, rowI: number) => {
        // TODO - update target link, or do we need?
        const targetLink = document.querySelector(`.tr-proj-link-${rowI}-0`)
        setIsTriggerElemHovered({ isHovered: isHovered, targetElem: targetLink })
    }

    return (
        <div className="projects-list">
            <span>PROJECTS</span>
            <hr />
            {projectContent.map((proj, i) => {
                return (
                    <div key={i} className="proj-card">
                        <div className="proj-info">
                            <img
                                className="proj-img"
                                src="/assets/thumbnails/email.png"
                                alt="Email API project thumbnail"
                            />
                            <div className="proj-content m-w-max">
                                <div
                                    className="proj-title hover-text me-4"
                                    onMouseEnter={() => { handleHover(true, i) }}
                                    onMouseLeave={() => { handleHover(false, i) }}
                                >
                                    {proj.title}
                                </div>
                                <div className="proj-type-links">
                                    {proj.projType} ·
                                    {proj.links.map((linkData, j) => {
                                        return (
                                            <span
                                                key={`link-${i}-${j}`}
                                                className={`proj-link-${i}-${j} proj-link`}
                                            >
                                                <ProjectLinks className={COMMON_COMPONENT_CLASSNAME} linkData={linkData} />
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className="proj-desc">{proj.description}</div>
                                {proj.demoCreds && proj.demoCreds.email &&
                                    <div className="demo">
                                        Demo credentials →  email: {proj.demoCreds.email} / pass: {proj.demoCreds.pass}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="proj-tags">
                            <Tags className={COMMON_COMPONENT_CLASSNAME} tagData={proj.tags} parentIndex={i} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsList
