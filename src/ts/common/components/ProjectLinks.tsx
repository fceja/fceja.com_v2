import "@scss/common/components/ProjectLinks.scss";
import { projectsSvgData } from "@content/ProjectsPageContent"

export type ProjectLinksProps = {
    className: string | null;
    linkData: {
        type: string
        url: string
        ariaLabel: string
    }
};

const ProjectLinks: React.FC<ProjectLinksProps> = (props) => {
    const { className, linkData } = props
    const svgData = projectsSvgData[linkData.type]

    return (
        <span className="icon-url-container">
            <a
                className={`${className}-${linkData.type}-link`}
                href={linkData.url}
                target="_blank"
                aria-label={linkData.ariaLabel}
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
        </span>
    )
};

export default ProjectLinks;