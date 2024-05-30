import HomeLink from "@components/projects/HomeLink"

import "@scss/components/projects/semantic/ProjectsHeader.scss"
const ProjectsHeader = () => {
    return (
        <header className="projects-header">
            <HomeLink />
            <h1>All Projects</h1>
        </header>
    )
}
export default ProjectsHeader