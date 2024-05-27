import "@scss/pages/ProjectsPage.scss"
import ProjectsHeader from "@components/projects/semantic/ProjectsHeader"
import ProjectsMain from "@components/projects/semantic/ProjectsMain"

const ProjectsPage = () => {
    return (
        <div className="projects-page p-4">
            <ProjectsHeader />
            <ProjectsMain />
        </div>
    )
}
export default ProjectsPage