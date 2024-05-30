import AboutSection from "@components/home/semantic/AboutSection"
import ExperienceSection from "@components/home/semantic/ExperienceSection"
import PinnedProjectsSection from "@components/home/semantic/PinnedProjectsSection"
import ArchivedProjectsLink from "@components/home/ArchivedProjectsLink"


const HomeMain = () => {
    return (
        <main className=" w-lg-50 mt-3 mt-lg-0 mx-lg-auto">
            <AboutSection />
            <ExperienceSection />
            <PinnedProjectsSection />
            <ArchivedProjectsLink />
        </main >
    )
}
export default HomeMain
