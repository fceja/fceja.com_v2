import HomeHeader from "@components/home/semantic/HomeHeader";
import HomeMain from "@components/home/semantic/HomeMain";
import Spotlight from "@common/components/Spotlight";

const HomePage = () => {
    return (
        <>
            <Spotlight />
            <div className="homepage p-4 d-lg-flex">
                <HomeHeader />
                <HomeMain />
            </div >
        </>
    )
}
export default HomePage