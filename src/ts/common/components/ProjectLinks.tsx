import "@scss/common/components/ProjectLinks.scss";
import { projectsSvgContent } from "@content/common/ProjectSvgContent"

export type ProjectLinksProps = {
    className: string | null;
    linkData: {
        type: string
        label: string
        url: string
        ariaLabel: string
    }
};

const ProjectLinks: React.FC<ProjectLinksProps> = (props) => {
    const { className, linkData } = props
    const svgData = projectsSvgContent[linkData.type]

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