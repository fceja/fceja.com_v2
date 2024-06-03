import "@scss/components/home/semantic/PinnedProjectsSection.scss"
import PinnedProjectCardsList from "@components/home/ProjectCardsList"

const PinnedProjectsSection = () => {
    return (
        <section className="home-projects mt-5">
            <h2 className="m-0">PROJECTS</h2>
            <PinnedProjectCardsList />
        </section >
    )
}
export default PinnedProjectsSection
