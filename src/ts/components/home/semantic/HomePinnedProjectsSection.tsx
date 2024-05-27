import "@scss/components/home/semantic/HomePinnedProjectsSection.scss"
import PinnedProjectCardsList from "@components/home/PinnedProjectCardsList"

const HomePinnedProjectsSection = () => {
    return (
        <section className="home-projects mt-5">
            <h2>Projects</h2>
            <div className="project-list">
                <PinnedProjectCardsList />
            </div>
        </section >
    )
}
export default HomePinnedProjectsSection