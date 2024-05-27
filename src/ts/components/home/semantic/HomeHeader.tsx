import "@scss/components/HomeHeader.scss"
import SocialLinks from "@components/home/SocialLinks"

const HomeHeader = () => {
    return (
        <header>
            <h1>Francisco Ceja</h1>
            <h3>QA / Automater / Python Developer</h3>
            <p>I like to code apps and stuff.</p>
            <SocialLinks />
        </header>
    )
}
export default HomeHeader