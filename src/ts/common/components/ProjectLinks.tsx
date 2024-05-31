import "@scss/common/components/ProjectLinks.scss";
import { projectLinkSvgData } from "@content/ProjectsPageContent"

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
        <span className="icon-url-container d-flex">
            <a
                href={linkData.url}
                target="_blank"
                className={`${className}-${linkData.type}-link`}
            >
                <svg
                    xmlns={svgData.xmlns}
                    viewBox={svgData.viewBox}
                    height={svgData.height}
                    className={`${className}-a-svg`}
                >
                    <path d={svgData.path} />
                </svg>
            </a>
            <span className={`${className}-hyphen`}>-</span>
            <span className={`${className}-url-link`}>{linkData.url}</span>
        </span>
    )
};

export default ProjectLinks;
