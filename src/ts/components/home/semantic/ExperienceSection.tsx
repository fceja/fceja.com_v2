import "@scss/components/home/semantic/ExperienceSection.scss"
import ExperienceCardsList from "@components/home/ExperienceCardsList"

const ExperienceSection = () => {
    return (
        <section className="experience mt-5">
            <h2 className="m-0">EXPERIENCE</h2>
            <hr className="hr-section" />
            <ExperienceCardsList />
        </section>
    )
}
export default ExperienceSection
