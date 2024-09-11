import { Link } from "react-router-dom"

import "@scss/components/homePage/viewMoreProjectsLink/ViewMoreProjectsLink.scss"

const ViewMoreProjectsLink = () => {
    return (
        <span
            className="more-projects-container d-flex"
            style={{ height: "50px" }}
        >
            <Link
                to="/projects"
                className="more-projects-link d-flex align-items-center mx-auto"
            >
                <span className="view-more-link">View More Projects</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="more-projects-arrow-svg ms-3"
                    style={{ height: "30px" }}
                >
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
            </Link>

        </span>

    )
}
export default ViewMoreProjectsLink