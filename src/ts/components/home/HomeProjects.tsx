import React from "react";

import "@scss/components/HomeProjects.scss"
import { pinnedProjectData } from "@content/ProjectContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"


const HomeProjects = () => {
    return (
        <section className="home-projects mt-5">
            <h2>Projects</h2>
            {pinnedProjectData.map((proj, i) => {
                return (
                    <div key={`proj-${i}`}>
                        <div className={`project-${i} mt-3 md:flex-row-reverse lg:flex-row-reverse`}>
                            <div className="proj-details w-100 sm:mt-10px">
                                <div className="proj-header d-flex">
                                    <div className="proj-title ">
                                        {proj.title}
                                    </div>
                                    <div className="d-flex ms-4">
                                        {proj.links.map((linkData, j) => {
                                            return (
                                                <React.Fragment key={`link-${i}-${j}`}>
                                                    <ProjectLinks className={"home-page"} linkData={linkData} />
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                                <p className="proj-p mt-4">{proj.paragraph}</p>
                                <Tags className={"home-page"} tagData={proj.tags} parentIndex={i} />
                            </div>
                            <div
                                className="proj-img"
                                style={{
                                    backgroundColor: "lightgray",
                                    height: "100px",
                                    minWidth: "125px",
                                    maxWidth: "125px",
                                }}
                            >
                                [Image container]
                            </div>
                        </div>
                    </div>
                )
            })}
        </section >
    )
}
export default HomeProjects