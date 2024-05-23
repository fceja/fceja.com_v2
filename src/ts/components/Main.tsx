import About from "@components/About"
import Experience from "@components/Experience"


const Main = () => {
    return (
        <main
            className="w-100 sm:mt-3 md:mt-3 lg:mlr-auto"
            style={mainStyles}>
            <About />
            <Experience />
        </main>
    )
}
export default Main


const mainStyles = {
    maxWidth: "1000px"
}