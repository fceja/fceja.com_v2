import React from "react"
import "@scss/components/projects/ProjectsTable.scss"
import { projectContent } from "@content/ProjectsPageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"

const COMMON_COMPONENT_CLASSNAME = 'projects-proj'

const ProjectsList = () => {
    return (
        <div className="projects-list">
            <span>PROJECTS</span>
            {projectContent.map((proj, i) => {
                return (
                    <React.Fragment key={i}>
                        <hr />
                        <div className={`proj-card-${i} proj-card`}>
                            <div className="proj-info">
                                {proj.videoPath &&
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
                                        }}
                                        onClick={(e) => {
                                            const video = e.currentTarget.querySelector("video");
                                            if (video) {
                                                // standard fullscreen
                                                if (video.requestFullscreen) {
                                                    video.requestFullscreen();
                                                }
                                                // safari fullscreen
                                                else if ((video as any).webkitRequestFullscreen) {
                                                    (video as any).webkitRequestFullscreen();
                                                }
                                                // IE11 fullscreen
                                                else if ((video as any).msRequestFullscreen) {
                                                    (video as any).msRequestFullscreen();
                                                }
                                            }
                                        }}>
                                        <video muted loop>
                                            <source src={proj.videoPath} type="video/mp4" />
                                            Your browser does not support the video.
                                        </video>
                                    </div>
                                }
                                <div className="proj-content m-w-max">
                                    <a
                                        href={proj.links[0].url}
                                        className="proj-title hover-text"
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
                                            <span className="underline">Demo credentials</span>
                                            <div>email: {proj.demoCreds.email} / pass: {proj.demoCreds.pass}</div>
                                        </div>
                                    }
                                    <div className="proj-tags">
                                        <Tags className={COMMON_COMPONENT_CLASSNAME} tagData={proj.tags} parentIndex={i} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default ProjectsList
