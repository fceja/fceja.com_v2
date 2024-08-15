import React, { useEffect, useState } from "react";
import "@scss/components/projects/ProjectsTable.scss";
import { projectContent } from "@content/ProjectsPageContent";
import ProjectLinks from "@common/components/ProjectLinks";
import Tags from "@common/components/Tags";

const COMMON_COMPONENT_CLASSNAME = "projects-proj";

const ProjectsList = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="projects-list">
            <span>PROJECTS</span>
            {projectContent.map((proj, i) => (
                <React.Fragment key={i}>
                    <hr />
                    <div className={`proj-card-${i} proj-card`}>
                        <div className="proj-info">
                            {proj.videoPath && (
                                <div className="video-container">
                                    {!isMobile && (
                                        <video
                                            muted
                                            loop
                                            onMouseEnter={(e) => {
                                                const video = e.currentTarget;
                                                video.play();
                                            }}
                                            onMouseLeave={(e) => {
                                                const video = e.currentTarget;
                                                video.pause();
                                            }}
                                            onClick={(e) => {
                                                const video = e.currentTarget;
                                                if (video.requestFullscreen) {
                                                    video.requestFullscreen();
                                                } else if ((video as any).webkitRequestFullscreen) {
                                                    (video as any).webkitRequestFullscreen();
                                                } else if ((video as any).msRequestFullscreen) {
                                                    (video as any).msRequestFullscreen();
                                                }
                                            }}
                                        >
                                            <source src={proj.videoPath} type="video/mp4" />
                                            Your browser does not support the video.
                                        </video>
                                    )}
                                    {isMobile && (
                                        <div
                                            className="mobile-play-container"
                                            onClick={(e) => {
                                                const video = e.currentTarget.querySelector("video");
                                                video?.play();
                                            }}
                                        >
                                            <div className="play-icon-overlay">▶️</div>
                                            <video muted>
                                                <source src={proj.videoPath} type="video/mp4" />
                                                Your browser does not support the video.
                                            </video>
                                        </div>
                                    )}
                                </div>
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

export default ProjectsList;
