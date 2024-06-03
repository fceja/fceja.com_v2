import "@scss/components/home/semantic/AboutSection.scss"

const AboutSection = () => {
    return (
        <section className="about">
            <h2 className="">ABOUT</h2>
            <p className="mt-4">
                Hello, my name is <strong className="hover-text">Francisco</strong>. <br />
                I am a python developer with a background in QA and Automation.
            </p>
            <p>
                I've had the privelage to work for a <strong><a href="https://valuestreamengineering.com/" target="_blank" className="hover-text">start-up</a></strong>, where we've worked with multiple clients and tech stacks.
                Through this experience, I've gained invaluable knowledge and skills.
            </p>
            <p>
                I've been expanding my skills by developing projects involving various
                programming languages and frameworks.
                At this point in my career, I am looking forward to pursuing a <strong className="hover-text">software engineering</strong> role.
            </p>
            <p>
                When I'm away from the keyboard, I'm usually reading, running, hanging out
                with friends and family, or attending to my <span className="plant-icon">plants</span>.
            </p>
        </section>
    )
}
export default AboutSection