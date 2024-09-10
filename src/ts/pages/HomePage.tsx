import HomeHeader from "@components/homePage/semantic/HomeHeader";
import HomeMain from "@components/homePage/semantic/HomeMain";

const HomePage = () => {
    return (
        <div
            className="homepage w-max p-4 d-lg-flex mx-auto"
            style={{ gap: "30px" }}
        >
            <HomeHeader />
            <HomeMain />
        </div >
    )
}
export default HomePage