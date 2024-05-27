import "@scss/common/components/ProjectLinks.scss";
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
            <span className="sm:d-none md:d-none ms-2">-</span>
            <span className="url-link sm:d-none md:d-none ms-2">{linkData.url}</span>
        </>
    )
};

export default ProjectLinks;
