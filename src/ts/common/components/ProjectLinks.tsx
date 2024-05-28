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
        <div className="link-container d-md-flex">
            <a
                href={linkData.url}
                target="_blank"
                className={`${className}-proj-${linkData.type}`}
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
            <span className="hyphen d-none d-md-block">-</span>
            <span className="url-link d-none d-md-block ms-2">{linkData.url}</span>
        </div>
    )
};

export default ProjectLinks;
