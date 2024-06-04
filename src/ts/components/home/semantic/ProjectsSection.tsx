import "@scss/components/home/semantic/ProjectsSection.scss"
import ProjectCardsList from "@components/home/ProjectCardsList"

const ProjectsSection = () => {
    return (
        <section className="home-projects mt-5">
            <h2 className="m-0">PROJECTS</h2>
            <ProjectCardsList />
        </section >
    )
}
export default ProjectsSection
