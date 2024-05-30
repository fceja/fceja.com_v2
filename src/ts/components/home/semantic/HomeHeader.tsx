import "@scss/components/home/semantic/HomeHeader.scss"
import SocialLinks from "@components/home/SocialLinks"

const HomeHeader = () => {
    return (
        <header className="home-header w-lg-50 d-lg-flex">
            <div className="mx-auto">
                <h1>Francisco Ceja</h1>
                <h2>QA / Automater / Python Developer</h2>
                <p>I like to code apps and stuff.</p>
                <SocialLinks />
            </div>
        </header>
    )
}
export default HomeHeader