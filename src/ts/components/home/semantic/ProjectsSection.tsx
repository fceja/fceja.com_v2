import "@scss/components/home/semantic/ProjectsSection.scss"
import ProjectsCards from "@common/components/ProjectCards"

const ProjectsSection = () => {
    return (
        <section className="home-projects mt-5">
            <h2 className="m-0 pb-2">PROJECTS</h2>
            < ProjectsCards className={'home'} onlyHomePinned={true} />
        </section >
    )
}
export default ProjectsSection
