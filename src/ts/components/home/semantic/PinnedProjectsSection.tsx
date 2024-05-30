import "@scss/components/home/semantic/PinnedProjectsSection.scss"
import PinnedProjectCardsList from "@components/home/PinnedProjectCardsList"

const PinnedProjectsSection = () => {
    return (
        <section className="home-projects mt-5">
            <h2>PROJECTS</h2>
            <PinnedProjectCardsList />
        </section >
    )
}
export default PinnedProjectsSection



