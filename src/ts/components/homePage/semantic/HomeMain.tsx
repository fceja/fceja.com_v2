import AboutSection from "@components/homePage/semantic/AboutSection"
import CertificationsSection from "@components/homePage/semantic/CertificationsSection"
import ExperienceSection from "@components/homePage/semantic/ExperienceSection"
import ProjectsSection from "@components/homePage/semantic/ProjectsSection"
import ViewMoreProjectsLink from "@components/homePage/ViewMoreProjectsLink"

const HomeMain = () => {
    return (
        <main className=" w-lg-50 mt-lg-0 mx-lg-auto">
            <AboutSection />
            <CertificationsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ViewMoreProjectsLink />
        </main >
    )
}
export default HomeMain
