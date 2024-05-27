import { pinnedProjectContent } from "@content/HomeContent"
import PinnedProjectCardDetails from "@components/home/PinnedProjectCardDetails"
import PinnedProjectCardImage from "@components/home/PinnedProjectCardImage"

const PinnedProjectCardsList = () => {
    return (
        <>
            {pinnedProjectContent.map((proj, i) => {
                return (
                    <div className={`project-${i} mt-3 md:flex-row-reverse lg:flex-row-reverse`}>
                        <PinnedProjectCardDetails projectDetails={proj} parentIndex={i} />
                        <PinnedProjectCardImage />
                    </div>
                )
            })}
        </>
    )
}
export default PinnedProjectCardsList