import About from "@components/About"
import Experience from "@components/Experience"
import HomeProjects from "@components/HomeProjects"


const Main = () => {
    return (
        <main
            className="w-100 sm:mt-3 md:mt-3 lg:mlr-auto"
            style={{ maxWidth: "1000px" }}>
            <About />
            <Experience />
            <HomeProjects />
        </main>
    )
}
export default Main
