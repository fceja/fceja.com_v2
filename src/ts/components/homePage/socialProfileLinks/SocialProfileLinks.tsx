import "@scss/components/homePage/socialProfileLinks/SocialProfileLinks.scss";
import { socialProfileLinksContent } from "./SocialProfileLinksContent"

const SocialProfileLinks = () => {
    return (
        <ul
            className="social-links d-flex"
            style={{ padding: "0" }}
        >
            {socialProfileLinksContent.map((elem, i) => {
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
export default SocialProfileLinks;
