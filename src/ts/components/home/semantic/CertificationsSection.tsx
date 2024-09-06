import "@scss/components/home/semantic/CertificationsSection.scss"

const CertificationsSection = () => {
    return (
        <section className="certifications mt-5">
            <h2 className="m-0">CERTIFICATIONS</h2>
            <hr className="hr-section" />
            <a
                className="badge-link"
                href="https://www.credly.com/badges/cdcd048e-e528-404f-8733-809e3b4db607/public_url"
                target="_blank"
                aria-label="AWS certified developer associate verification link"
            >
                <img
                    src="assets/images/aws-certified-developer-associate.png"
                    alt="AWS certified developer associate badge"
                />
                <span>AWS Certified Developer Associate</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                </svg>
            </a>
        </section>
    )
}

export default CertificationsSection
