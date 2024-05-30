import "@scss/pages/HomePage.scss"
import HomeHeader from "@components/home/semantic/HomeHeader";
import HomeMain from "@components/home/semantic/HomeMain";
import Spotlight from "@common/components/Spotlight";

const HomePage = () => {
    return (
        <>
            <Spotlight />
            <div className="homepage p-4 d-lg-flex mx-auto">
                <HomeHeader />
                <HomeMain />
            </div >
        </>
    )
}
export default HomePage