import "@scss/components/ProjectLinks.scss";
import { projectLinkSvgData } from "@content/ProjectContent"

type linkDataT = {
    type: string
    url: string
}

export type ProjectLinksProps = {
    className: string | null;
    linkData: linkDataT[]
};

const ProjectLinks = (props: ProjectLinksProps) => {
    const { className, linkData } = props

    return (
        <>
            {linkData.map((link, i) => {
                const svgData = projectLinkSvgData[`${link.type}`]
                return (
                    <div key={`${className}-link-${i}`} className={`${className}-proj-links d-flex align-items-center justify-content-around`}>
                        <a
                            href={link.url}
                            target="_blank"
                            className={`${className}-proj-${link.type} d-flex`}
                        >
                            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */}
                            <svg
                                xmlns={svgData.xmlns}
                                viewBox={svgData.viewBox}
                                height={svgData.height}
                                className={`${className}-a-svg`}
                            >
                                <path
                                    d={svgData.path} />
                            </svg>
                        </a>
                    </ div >

                )
            })}
        </>
    )
};

export default ProjectLinks;
