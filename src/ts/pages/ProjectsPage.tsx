import ProjectsHeader from "@components/projectsPage/semantic/ProjectsHeader"
import ProjectsMain from "@components/projectsPage/semantic/ProjectsMain"

const ProjectsPage = () => {
    return (
        <div className="projects-page w-max p-4 mx-auto">
            <ProjectsHeader />
            <ProjectsMain />
        </div>
    )
}
export default ProjectsPage