import "@scss/components/home/semantic/ExperienceSection.scss"
import ExperienceCardsList from "@components/home/ExperienceCardsList"

const HomeExperienceSection = () => {
    return (
        <section className="experience mt-5">
            <h2>Experience</h2>
            <ExperienceCardsList />
        </section>
    )
}
export default HomeExperienceSection