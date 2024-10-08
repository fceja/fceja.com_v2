import "@scss/components/homePage/semantic/ProjectsSection.scss"
import ProjectsCards from "@common/components/projectCards/ProjectCards"

const ProjectsSection = () => {
    return (
        <section className="home-projects mt-5">
            <h2 className="m-0">PROJECTS</h2>
            <hr className="hr-section" />
            < ProjectsCards className={'home'} onlyHomePinned={true} />
        </section >
    )
}
export default ProjectsSection
