import { useState } from "react";

import "@scss/components/projects/InfoTooltip.scss"
import { projectsSvgData } from "@content/ProjectsPageContent"

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
                xmlns={projectsSvgData.info.xmlns}
                viewBox={projectsSvgData.info.viewBox}
                height={projectsSvgData.info.height}
                className="info-svg d-flex"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                <path d={projectsSvgData.info.path} />

            </svg>
            <span className={`info-tooltip ${isHover ? '' : 'hidden'}`}>{message}</span>
        </span>
    )
}

export default InfoTooltip
