import About from "@components/About"
import Experience from "@components/Experience"
import Projects from "@components/Projects"


const Main = () => {
    return (
        <main
            className="w-100 sm:mt-3 md:mt-3 lg:mlr-auto"
            style={{ maxWidth: "1000px" }}>
            <About />
            <Experience />
            <Projects />
        </main>
    )
}
export default Main
