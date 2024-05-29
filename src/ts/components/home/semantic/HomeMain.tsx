import HomeAboutSection from "@components/home/semantic/AboutSection"
import HomeExperienceSection from "@components/home/semantic/ExperienceSection"
import HomePinnedProjectsSection from "@components/home/semantic/PinnedProjectsSection"
import ArchivedProjectsLink from "@components/home/ArchivedProjectsLink"


const HomeMain = () => {
    return (
        <main
            className="w-100 mt-3 mt-lg-0 mx-lg-auto"
            style={{ maxWidth: "1000px" }}
        >
            <HomeAboutSection />
            <HomeExperienceSection />
            <HomePinnedProjectsSection />
            <ArchivedProjectsLink />
        </main >
    )
}
export default HomeMain
