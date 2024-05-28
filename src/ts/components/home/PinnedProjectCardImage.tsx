import "@scss/components/home/PinnedProjectCardImage.scss"

const PinnedProjectCardImage = () => {
    return (
        <div
            className="img-container"
            style={{ minWidth: "125px" }}
        >
            < img
                className="proj-img"
                src="src/assets/github-logo.png"
                style={{ width: "100px" }}
            />
        </div>
    )
}
export default PinnedProjectCardImage