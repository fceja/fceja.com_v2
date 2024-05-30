import ProjectsHeader from "@components/projects/semantic/ProjectsHeader"
import ProjectsMain from "@components/projects/semantic/ProjectsMain"

const ProjectsPage = () => {
    return (
        <div className="projects-page w-max p-4 mx-auto">
            <ProjectsHeader />
            <ProjectsMain />
        </div>
    )
}
export default ProjectsPage