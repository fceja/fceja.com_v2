import Footer from "@common/components/semantic/Footer";
import HomeHeader from "@components/home/semantic/HomeHeader";
import HomeMain from "@components/home/semantic/HomeMain";
import Spotlight from "@common/components/Spotlight";

const HomePage = () => {
    return (
        <>
            <Spotlight />
            <div
                className="homepage w-max p-4 d-lg-flex mx-auto"
                style={{ gap: "30px" }}
            >
                <HomeHeader />
                <HomeMain />
            </div >
            <Footer />
        </>
    )
}
export default HomePage