import "@scss/components/Experience.scss"

const Experience = () => {
    return (
        <section className="experience pt-5">
            <h2>Experience</h2>
            <div>
                <ol>
                    <li className="mt-3">
                        <div className="exp-card gap-3 sm:block md:flex lg:flex">
                            <span className="card-year">2024 - PRESENT</span>
                            <div className="card-desc">
                                <div className="card-title">FrontEnd Engineer</div>
                                <div className="card-paragraph mt-3">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}
export default Experience