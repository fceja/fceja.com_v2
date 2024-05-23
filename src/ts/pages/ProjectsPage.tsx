import { Link } from "react-router-dom"

import "@scss/pages/ProjectsPage.scss"

const Projects = () => {
    return (
        <>
            <Link to="/">Homepage</Link>
            <div
                style={{ color: "white" }}
            >Projects</div>
        </>
    )
}
export default Projects