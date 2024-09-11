import HomeLink from "@common/components/homeLink/HomeLink"

import "@scss/components/projectsPage/semantic/ProjectsHeader.scss"
const ProjectsHeader = () => {
    return (
        <header className="projects-header">
            <HomeLink />
            <h1>All Projects</h1>
        </header>
    )
}
export default ProjectsHeader