import { Link } from "react-router-dom"

import HomeAboutSection from "@components/home/semantic/HomeAboutSection"
import HomeExperienceSection from "@components/home/semantic/HomeExperienceSection"
import HomeProjectsSection from "@components/home/semantic/HomeProjectsSection"


const HomeMain = () => {
    return (
        <main
            className="w-100 sm:mt-3 md:mt-3 lg:mlr-auto"
            style={{ maxWidth: "1000px" }}>
            <HomeAboutSection />
            <HomeExperienceSection />
            <HomeProjectsSection />
            <Link to="/projects">Archived Projects</Link>
        </main>
    )
}
export default HomeMain
