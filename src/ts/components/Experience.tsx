import "@scss/components/Experience.scss"

const Experience = () => {
    return (
        <section className="experience pt-5">
            <h2>Experience</h2>
            <div>
                <ol>
                    <li className="mt-3">
                        <div className="exp-card p-2 gap-3 sm:block md:flex lg:flex">
                            <span className="card-year">2024 - PRESENT</span>
                            <div>

                                <div className="card-desc">
                                    <div className="card-title">Frontend Engineer</div>
                                    <div className="card-paragraph mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</div>
                                </div>
                                <div className="tags block mt-3">
                                    <span className="py-1 px-2">JavaScript</span>
                                    <span className="py-1 px-2">TypeScript</span>
                                    <span className="py-1 px-2">React</span>
                                    <span className="py-1 px-2">Node.js</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}
export default Experience