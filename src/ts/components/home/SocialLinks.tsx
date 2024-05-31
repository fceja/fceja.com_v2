import "@scss/components/home/SocialLinks.scss";
import { socialLinksContent } from "@content/HomePageContent"

const SocialLinks = () => {
    return (
        <ul
            className="social-links d-flex"
            style={{
                height: "60px",
                margin: "50px 0 0 0",
                padding: "0",
            }}
        >
            {socialLinksContent.map((elem, i) => {
                return (
                    <span key={`${elem.name}-${i}`} className="me-2">
                        <a
                            href={elem.href}
                            target={elem.target}
                        >
                            <svg
                                xmlns={elem.svgData.xmlns}
                                viewBox={elem.svgData.viewBox}
                                className={`link-icon-${elem.name}`}
                                height={`${elem.svgData.height}`}
                            >
                                <path d={`${elem.svgData.dPath}`} />
                            </svg>
                        </a>
                    </span>
                )
            })}
        </ul>
    );
};
export default SocialLinks;
