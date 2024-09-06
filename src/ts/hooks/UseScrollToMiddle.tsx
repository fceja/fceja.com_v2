import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Wait for page elements to load, then scroll to element */
export const useScrollToMiddle = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) { return }

        // parse elementId to scroll to
        const elementId = hash.replace("#", "");

        // scroll element to middle of page
        const scrollToElement = () => {
            const element = document.getElementById(elementId);

            if (!element) { return }
            // get  element's top offset relative to document
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;

            // calc middle of viewport
            const middlePosition =
                absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

            // scroll to middle
            window.scrollTo({
                top: middlePosition,
                behavior: "smooth",
            });
        };

        // delay scrolling, allow for components to load
        const timeoutId = setTimeout(scrollToElement, 1000);

        // cleanup
        return () => clearTimeout(timeoutId);

    }, [hash]);
}