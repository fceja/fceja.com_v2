import ProjectCards from "@common/components/projectCards/ProjectCards"
import HomeLink from "@common/components/homeLink/HomeLink"

const ProjectsMain = () => {
    return (
        <main>
            < ProjectCards />
            <div className="d-flex justify-content-center mt-5">
                <HomeLink />
            </div>
        </main>
    )
}
export default ProjectsMain