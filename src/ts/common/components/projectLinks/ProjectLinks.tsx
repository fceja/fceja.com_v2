import "@scss/common/components/projectLinks/ProjectLinks.scss";
import { projectsLinksSvgContent } from "./ProjectLinksSvgContent"

export interface IProjectLinks {
    className: string | null;
    linkData: {
        type: string
        label: string
        url: string
        ariaLabel: string
    }
};

const ProjectLinks: React.FC<IProjectLinks> = ({ className, linkData }) => {
    const svgData = projectsLinksSvgContent[linkData.type]

    return (
        <span className="icon-url-container">
            <a
                className={`${className}-${linkData.type}-link proj-link`}
                href={linkData.url}
                target="_blank"
                aria-label={linkData.ariaLabel}
            >
                {linkData.label &&

                    <span className="link-label">
                        {linkData.label}:
                    </span>
                }
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