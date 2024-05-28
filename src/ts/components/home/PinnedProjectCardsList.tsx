import { pinnedProjectContent } from "@content/HomePageContent"
import PinnedProjectCardDetails from "@components/home/PinnedProjectCardDetails"
import PinnedProjectCardImage from "@components/home/PinnedProjectCardImage"

const PinnedProjectCardsList = () => {
    return (
        <div className="project-list">
            {pinnedProjectContent.map((proj, i) => {
                return (
                    <div className={`project-card-${i} mt-3 d-md-flex flex-md-row-reverse`}>
                        <PinnedProjectCardDetails projectDetails={proj} parentIndex={i} />
                        <PinnedProjectCardImage />
                    </div>
                )
            })}
        </div>
    )
}
export default PinnedProjectCardsList