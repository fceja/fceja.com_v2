import { Link } from "react-router-dom"

import "@scss/pages/ProjectsPage.scss"
import Tags from "@common/components/Tags"

const parentIndex = 1
const tagData = ["JavaScript", "HTML", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "React Native", "Next.js", "TypeScript"]

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="heading">
                <Link to="/">Homepage</Link>
                <h1>Projects</h1>
            </div>
            <table className="table-data">
                <thead className="t-row">
                    <tr>
                        <th className="t-row-year py-3 pe-4">Year</th>
                        <th className="t-row-proj">Project</th>
                        <th className="t-row-built sm:d-none">Built With</th>
                        <th className="t-row-link sm:d-none">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="t-row">
                        <td className="t-row-year py-3">2023</td>
                        <td className="t-row-proj">Emerson Collective</td>
                        <td className="t-row-built sm:d-none">
                            <Tags
                                tagData={tagData} parentIndex={parentIndex} />
                        </td>
                        <td className="t-row-link sm:d-none">www.facebook.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Projects