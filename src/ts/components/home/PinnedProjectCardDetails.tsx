import React from "react";

import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"

type linkData = {
    type: string,
    url: string
}

interface PinnedProjectCardDetailsI {
    projectDetails: {
        title: string,
        links: linkData[],
        paragraph: string,
        tags: string[]
    }
    parentIndex: number
}

const PinnedProjectCardDetails = (props: PinnedProjectCardDetailsI) => {
    const { projectDetails, parentIndex } = props

    return (
        <div className="proj-details w-100 sm:mt-10px">
            <div className="proj-header d-flex">
                <div className="proj-title ">
                    {projectDetails.title}
                </div>
                <div className="d-flex ms-4">
                    {projectDetails.links.map((linkData, j) => {
                        return (
                            <React.Fragment key={`link-${parentIndex}-${j}`}>
                                <ProjectLinks className={"home-page"} linkData={linkData} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
            <p className="proj-p mt-4">{projectDetails.paragraph}</p>
            <Tags className={"home-page"} tagData={projectDetails.tags} parentIndex={parentIndex} />
        </div>
    )
}
export default PinnedProjectCardDetails