import "@scss/components/home/PinnedProjectCardList.scss"
import { pinnedProjectContent } from "@content/HomePageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHightlightJump"

const COMMON_COMPENENT_CLASSNAME = 'home-proj'

const PinnedProjectCardsList = () => {
    const setIsTriggerElemHovered = useHighlightJump()

    const handleHover = (hover: boolean, i: number) => {
        const targetLink = document.querySelector(`.link-${i}-0`)
        setIsTriggerElemHovered({ isHovered: hover, targetElem: targetLink })
    }

    return (
        <div className="project-list">
            {pinnedProjectContent.map((proj, i) => {
                return (
                    <div
                        key={`proj-card-${i}`}
                        id={`proj-card-${i}`}
                        className={"mt-3 d-md-flex flex-md-row-reverse"}>
                        <div className="proj-details">
                            <div className="proj-header d-flex">
                                <div
                                    className="hover-text proj-title "
                                    onMouseEnter={() => handleHover(true, i)}
                                    onMouseLeave={() => handleHover(false, i)}
                                    style={{ minWidth: "175px" }}
                                >
                                    {proj.title}
                                </div>
                                <div className="proj-header-links d-flex d-md-block ms-4">
                                    {proj.links.map((linkData, j) => {
                                        return (
                                            <div
                                                id={`link-${i}-${j}`}
                                                key={`link-${i}-${j}`}
                                                className={`link-${i}-${j} d-md-flex`}
                                            >
                                                <ProjectLinks className={COMMON_COMPENENT_CLASSNAME} linkData={linkData} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <p className="proj-p mt-3">{proj.paragraph}</p>
                            <Tags className={COMMON_COMPENENT_CLASSNAME} tagData={proj.tags} parentIndex={i} />
                        </div>
                        <div
                            className="proj-img-container"
                            style={{ minWidth: "125px" }}
                        >
                            < img
                                className="proj-img"
                                src="src/assets/github-logo.png"
                                style={{ width: "100px" }}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default PinnedProjectCardsList
