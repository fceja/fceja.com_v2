import { Link } from "react-router-dom"

import HomeAboutSection from "@components/home/semantic/HomeAboutSection"
import HomeExperienceSection from "@components/home/semantic/HomeExperienceSection"
import HomePinnedProjectsSection from "@components/home/semantic/HomePinnedProjectsSection"


const HomeMain = () => {
    return (
        <main
            className="w-100 mt-3 mt-lg-0 mx-lg-auto"
            style={{ maxWidth: "1000px" }}
        >
            <HomeAboutSection />
            <HomeExperienceSection />
            <HomePinnedProjectsSection />
            <Link to="/projects">Archived Projects</Link>
        </main >
    )
}
export default HomeMain
