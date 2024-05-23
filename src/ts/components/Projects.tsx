import "@scss/components/Projects.scss"
const Projects = () => {
    return (
        <section className="projects mt-5">
            <h2>Projects</h2>
            <div className="d-flex gap-3 mt-3">
                <div
                    className="proj-img"
                    style={{
                        minWidth: "125px",
                        height: "100px",
                        backgroundColor: "lightgray"
                    }}
                >[Image container]</div>
                <div
                    className="proj-desc"
                    style={{
                        width: "100%",
                    }}
                >
                    <span className="">This is project title</span>
                    <span
                        className="ml-1"
                        style={{ marginLeft: "10px" }}
                    >
                        [Arrow]
                    </span>
                    <p className="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>
        </section>
    )
}
export default Projects