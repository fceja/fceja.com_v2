import "@scss/components/home/semantic/AboutSection.scss"
import { aboutContent } from "@content/HomePageContent"

const AboutSection = () => {
    return (
        <section className="about">
            <h2>About</h2>
            <p>{aboutContent}</p>
        </section>
    )
}
export default AboutSection