import "@scss/components/ProjectLinks.scss";
import { projectLinkSvgData } from "@content/ProjectContent"

export type ProjectLinksProps = {
    className: string | null;
    linkData: {
        type: string
        url: string
    }
};

const ProjectLinks = (props: ProjectLinksProps) => {
    const { className, linkData } = props

    const svgData = projectLinkSvgData[`${linkData.type}`]

    return (
        <>
            <div className={`${className}-proj-links d-flex align-items-center justify-content-around`}>
                <a
                    href={linkData.url}
                    target="_blank"
                    className={`${className}-proj-${linkData.type} d-flex`}
                >
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
        </>
    )
};

export default ProjectLinks;
