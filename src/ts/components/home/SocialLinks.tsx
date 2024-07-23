import "@scss/components/home/SocialLinks.scss";
import { socialLinksContent } from "@content/HomePageContent"

const SocialLinks = () => {
    return (
        <ul
            className="social-links d-flex"
            style={{ padding: "0" }}
        >
            {socialLinksContent.map((elem, i) => {
                return (
                    <li key={`${elem.name}-${i}`}>
                        <a
                            href={elem.href}
                            target={elem.target}
                            className={`social-link`}
                            aria-label={elem.ariaLabel}
                        >
                            <svg
                                xmlns={elem.svgData.xmlns}
                                viewBox={elem.svgData.viewBox}
                                className={`social-link-svg-${elem.name}`}
                                height={`${elem.svgData.height}`}
                            >
                                <path d={`${elem.svgData.dPath}`} />
                            </svg>
                        </a>
                    </li>
                )
            })}
        </ul>
    );
};
export default SocialLinks;
