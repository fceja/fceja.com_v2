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
                    <a key={`${elem.name}-${i}`}
                        href={elem.href}
                        target={elem.target}
                        className={`social-link`}
                        aria-label={elem.ariaLabel}
                    >
                        <svg
                            xmlns={elem.svgData.xmlns}
                            viewBox={elem.svgData.viewBox}
                            className={`social-link-svg social-link-svg-${elem.name}`}
                        >
                            <path d={`${elem.svgData.dPath}`} />
                        </svg>
                    </a>
                )
            })}
        </ul>
    );
};
export default SocialLinks;
