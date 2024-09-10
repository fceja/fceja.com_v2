import "@scss/components/homePage/semantic/HomeHeader.scss"
import SocialProfileLinks from "@components/homePage/SocialProfileLinks"

const HomeHeader = () => {
    return (
        <header className="home-header w-lg-50 d-lg-flex">
            <div className="mx-auto">
                <h1 id="header-name">Francisco Ceja</h1>
                <h2>Automater / Developer</h2>
                <p>I like to code apps and stuff.</p>
                <SocialProfileLinks />
            </div>
        </header>
    )
}
export default HomeHeader