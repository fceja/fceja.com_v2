import "@scss/components/projects/ProjectsTable.scss"
import { projectContent } from "@content/ProjectsPageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"

const COMMON_COMPONENT_CLASSNAME = 'projects-proj'

const ProjectsList = () => {
    return (
        <div className="projects-list">
            <span>PROJECTS</span>
            <hr />
            {projectContent.map((proj, i) => {
                return (
                    <div key={i} className="proj-card">
                        <div className="proj-info">
                            <div className="video-container"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector("video");
                                    if (video) {
                                        video.play();
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector("video");
                                    if (video) {
                                        video.pause();
                                    }
                                }}>
                                <video muted loop>
                                    <source src="/assets/video/sample1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="proj-content m-w-max">
                                <a
                                    href={proj.links[0].url}
                                    className="proj-title hover-text me-4"
                                    target="_blank"
                                >
                                    {proj.title}
                                </a>
                                <div className="proj-type">{proj.projType}</div>
                                <div className="proj-links">
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
