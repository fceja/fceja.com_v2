import "@scss/components/home/PinnedProjectCardList.scss"
import { pinnedProjectContent } from "@content/HomePageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHightlightJump"

const COMMON_COMPENENT_CLASSNAME = 'home-proj'

const PinnedProjectCardsList = () => {
    const setIsTriggerElemHovered = useHighlightJump()

    const handleHover = (hover: boolean, i: number) => {
        const targetLink = document.querySelector(`.home-proj-link-${i}-0`)
        setIsTriggerElemHovered({ isHovered: hover, targetElem: targetLink })
    }

    return (
        <div className="project-list">
            {pinnedProjectContent.map((proj, i) => {
                return (
                    <div
                        key={`home-proj-card-${i}`}
                        id={`home-proj-card-${i}`}
                        className={"home-proj-card d-md-flex flex-md-row-reverse"}
                        style={{ margin: "50px 0 0 0" }}
                    >
                        <div className="home-proj-details">
                            <div className="home-proj-header d-flex flex-wrap">
                                <a
                                    href={proj.links[0].url}
                                    target="_blank"
                                    className="home-proj-title-link hover-text me-3"
                                    onMouseEnter={() => handleHover(true, i)}
                                    onMouseLeave={() => handleHover(false, i)}
                                >
                                    <h5>{proj.title}</h5>
                                </a>
                                <div className="home-proj-header-links d-flex">
                                    {proj.links.map((linkData, j) => {
                                        return (
                                            <div
                                                id={`home-proj-link-${i}-${j}`}
                                                key={`home-proj-link-${i}-${j}`}
                                                className={`home-proj-link-${i}-${j} home-proj-link d-md-flex`}
                                            >
                                                <ProjectLinks className={COMMON_COMPENENT_CLASSNAME} linkData={linkData} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <p className="home-proj-p mt-3">{proj.paragraph}</p>
                            <Tags className={COMMON_COMPENENT_CLASSNAME} tagData={proj.tags} parentIndex={i} />
                        </div>
                        <div
                            className="home-proj-img-container"
                            style={{ minWidth: "125px" }}
                        >
                            < img
                                className="home-proj-img"
                                src="src/assets/github-logo.png"
                                style={{ width: "100px" }}
                            />
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
export default PinnedProjectCardsList
