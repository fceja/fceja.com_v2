import Header from "@components/Header";
import Main from "@components/Main";

const HomePage = () => {
    return (
        <div
            className="homepage p-4 lg:gap-2 lg:flex"
            style={{
                gap: "5em"
            }}
        >
            <Header />
            <Main />
        </div >
    )
}
export default HomePage