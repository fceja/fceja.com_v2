import { useState } from "react";

import "@scss/components/projectsPage/infoTooltip/InfoTooltip.scss"
import { projectsLinksSvgContent } from "@common/components/projectLinks/ProjectLinksSvgContent"

interface IInfoTooltip {
    message: string
}

const InfoTooltip: React.FC<IInfoTooltip> = ({ message }) => {
    const [isHover, setIsHover] = useState(false)

    const handleHover = (isHovering: boolean) => {
        if (isHovering) {
            setIsHover(true)
        } else {
            setIsHover(false)
        }
    }
    return (
        <span className="info-icon-container ms-2">
            <svg
                xmlns={projectsLinksSvgContent.info.xmlns}
                viewBox={projectsLinksSvgContent.info.viewBox}
                height={projectsLinksSvgContent.info.height}
                className="info-svg d-flex"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                <path d={projectsLinksSvgContent.info.path} />

            </svg>
            <span className={`info-tooltip ${isHover ? '' : 'hidden'}`}>{message}</span>
        </span>
    )
}

export default InfoTooltip
