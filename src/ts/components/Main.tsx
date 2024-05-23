import About from "@components/About"
import Experience from "@components/Experience"

const Main = () => {
    return (
        <main
            className="sm:mt-3 md:mt-3 lg:w-50 lg:mlr-auto"
            style={{
                width: "100%",
                maxWidth: "1000px"
            }}>
            <About />
            <Experience />
        </main>
    )
}
export default Main