import HomeHeader from "@components/home/semantic/HomeHeader";
import HomeMain from "@components/home/semantic/HomeMain";

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