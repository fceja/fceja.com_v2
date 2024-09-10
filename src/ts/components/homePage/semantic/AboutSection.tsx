import "@scss/components/homePage/semantic/AboutSection.scss"
import Collapsible from "@common/components/Collapsible"

// pre-load cursor image to reduce delay
const preLoadCursorImage = new Image()
preLoadCursorImage.src = "/assets/cursor/plant-icon.png"

const AboutSection = () => {
    return (
        <section className="about">
            <h2 className="">ABOUT</h2>
            <hr className="hr-section" />
            <Collapsible>
                <div className="about-content p-1">
                    <p>
                        Hello, my name is <strong className="hover-text">Francisco</strong>. <br />
                        I am a developer with a background in <strong className="hover-text">QA</strong>, <strong className="hover-text">Automation</strong>, and <strong className="hover-text">Software Development</strong>.
                    </p>
                    <p>
                        I've had the opportunity to work for a <strong><a href="https://valuestreamengineering.com/" target="_blank" className="hover-text">start-up</a></strong>, where I've had the privilege to work with multiple clients and tech stacks
                        — gaining invaluable knowledge and skills.
                    </p>
                    <p>
                        When I'm away from the keyboard, I'm usually reading, running, hanging out
                        with friends and family, or attending to my <span className="plant-icon">plants</span>.
                    </p>
                </div>
            </Collapsible>
        </section >
    )
}
export default AboutSection