import { useState } from "react";

import "@scss/components/projectsPage/InfoTooltip.scss"
import { projectsSvgContent } from "@content/common/ProjectSvgContent"

interface InfoTooltipI {
    message: string
}

const InfoTooltip = (props: InfoTooltipI) => {
    const [isHover, setIsHover] = useState(false)
    const { message } = props

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
                xmlns={projectsSvgContent.info.xmlns}
                viewBox={projectsSvgContent.info.viewBox}
                height={projectsSvgContent.info.height}
                className="info-svg d-flex"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                <path d={projectsSvgContent.info.path} />

            </svg>
            <span className={`info-tooltip ${isHover ? '' : 'hidden'}`}>{message}</span>
        </span>
    )
}

export default InfoTooltip
