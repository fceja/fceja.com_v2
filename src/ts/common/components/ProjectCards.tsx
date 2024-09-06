import React from "react";

import "@scss/common/components/ProjectCards.scss";
import { projectCardsContent, projectCardT } from "@content/ProjectsPageContent";
import ProjectLinks from "@common/components/ProjectLinks";
import Tags from "@common/components/Tags";
import { useScrollToMiddle } from "@hooks/UseScrollToMiddle"
import Video from "@components/projects/Video"

const COMMON_COMPONENT_CLASSNAME = "projects-proj";

interface ProjectCardsI {
    className?: string
    onlyHomePinned?: boolean
}

const ProjectsCards: React.FC<ProjectCardsI> = (props) => {
    const { className, onlyHomePinned } = props
    useScrollToMiddle()

    /* determine if we return all project cards, or only the ones pinned for home page */
    const projectCards: projectCardT[] = onlyHomePinned ?
        projectCardsContent.filter((card) => card.homePinned).reverse()
        : projectCardsContent

    return (
        <div className="projects-list">
            {projectCards.map((proj, i) => (
                <React.Fragment key={i}>
                    {i !== 0 && <hr className="hr-project" />}
                    <div className={`proj-card-${i} proj-card`}>
                        <div id={proj.id} className={`${!className ? 'proj-info' : `${className}-proj-info`}`}>
                            {proj.videoPath && (
                                <Video projectData={proj} />
                            )}
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
                                    {proj.links.map((linkData, j) => (
                                        <span
                                            key={`link-${i}-${j}`}
                                            className={`proj-link-${i}-${j} proj-link`}
                                        >
                                            <ProjectLinks
                                                className={COMMON_COMPONENT_CLASSNAME}
                                                linkData={linkData}
                                            />
                                        </span>
                                    ))}
                                </div>
                                <div className="proj-desc">{proj.description}</div>
                                <div className="proj-desc">{proj.description2}</div>
                                {proj.demoCreds && proj.demoCreds.email && (
                                    <div className="demo">
                                        <span className="underline">Demo credentials</span>
                                        <div>
                                            email: {proj.demoCreds.email} / pass:{" "}
                                            {proj.demoCreds.pass}
                                        </div>
                                    </div>
                                )}
                                <div className="proj-tags">
                                    <Tags
                                        className={COMMON_COMPONENT_CLASSNAME}
                                        tagData={proj.tags}
                                        parentIndex={i}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProjectsCards;
