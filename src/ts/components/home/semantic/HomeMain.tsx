import AboutSection from "@components/home/semantic/AboutSection"
import CertificationsSection from "@components/home/semantic/CertificationsSection"
import ExperienceSection from "@components/home/semantic/ExperienceSection"
import ProjectsSection from "@components/home/semantic/ProjectsSection"
import AllProjectsLink from "@components/home/AllProjectsLink"

const HomeMain = () => {
    return (
        <main className=" w-lg-50 mt-lg-0 mx-lg-auto">
            <AboutSection />
            <CertificationsSection />
            <ExperienceSection />
            <ProjectsSection />
            <AllProjectsLink />
        </main >
    )
}
export default HomeMain
