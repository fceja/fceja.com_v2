import React from "react";

import "@scss/common/components/projectCards/ProjectCards.scss";
import MediaRenderer from "@common/components/mediaRenderer/MediaRenderer"
import { TMp4VideoPlayer } from "@common/components/mp4VideoPlayer/Mp4VideoPlayer"
import { TPngThumbnail } from "@common/components/pngThumbnail/PngThumbnail"
import { projectCardsContent } from "./ProjectCardsContent";
import ProjectLinks from "@common/components/projectLinks/ProjectLinks";
import Tags from "@common/components/tags/Tags";
import { useScrollToMiddle } from "@hooks/UseScrollToMiddle"

const COMMON_COMPONENT_CLASSNAME = "projects-proj";

type TDemoCreds = {
    email: string
    pass: string
} | null

type TLink = {
    type: string
    label: string
    url: string
    ariaLabel: string
}

type TProjectCard = {
    demoCreds: TDemoCreds | null
    description: string
    description2: string | null
    homePinned: boolean
    id: string
    links: TLink[]
    media: TMp4VideoPlayer | TPngThumbnail | null
    projType: string
    tags: any[]
    title: string
    year: string
}

interface IProjectCards {
    className?: string
    onlyHomePinned?: boolean
}

const ProjectsCards: React.FC<IProjectCards> = ({ className, onlyHomePinned }) => {
    useScrollToMiddle()

    /* determine if we return all project cards, or only the ones pinned for home page */
    const projectCards: TProjectCard[] = onlyHomePinned ?
        projectCardsContent.filter((card) => card.homePinned).reverse()
        : projectCardsContent

    return (
        <div className="projects-list">
            {projectCards.map((proj, i) => (
                <React.Fragment key={i}>
                    {i !== 0 && <hr className="hr-project" />}
                    <div className={`proj-card-${i} proj-card`}>
                        <div id={proj.id} className={`${!className ? 'proj-info' : `${className}-proj-info`}`}>
                            {proj.media &&
                                <MediaRenderer media={proj.media} />
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
                                    {proj.links.map((linkData, j) => (
                                        <span
                                            key={`link-${i}-${j}`}
                                            className={`proj-link-${i}-${j}`}
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
