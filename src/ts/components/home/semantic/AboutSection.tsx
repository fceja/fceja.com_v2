import "@scss/components/home/semantic/AboutSection.scss"
import { aboutContent } from "@content/HomePageContent"

const AboutSection = () => {
    return (
        <section className="about">
            <h2 className="m-0">ABOUT</h2>
            <p className="m-0 mt-3 p-0">{aboutContent}</p>
        </section>
    )
}
export default AboutSection
