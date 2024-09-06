import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToMiddle = () => {
    const { hash } = useLocation();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    /* scrolls element to middle of viewport */
    const scrollToElement = () => {
        const elementId = hash.replace("#", "");

        const element = document.getElementById(elementId);
        if (!element) return;

        // get element's top offset relative to document
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;

        // calc middle position of viewport
        const middlePosition =
            absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

        // scroll to middle
        window.scrollTo({
            top: middlePosition,
            behavior: "smooth",
        });
    };

    /* handles hash in url */
    useEffect(() => {
        if (!hash) return;

        const handleHashChange = () => {
            /*
            defers execution until after the current stack is cleared
            and pending rendering tasks are completed.
            */
            setTimeout(scrollToElement, 0);
        };

        if (isFirstLoad) {
            // handle initial page load
            window.addEventListener("load", handleHashChange);

            setIsFirstLoad(false);

            return () => {
                window.removeEventListener("load", handleHashChange);
            };

        } else {
            // handle hash change after initial page load
            handleHashChange();

            return
        }


    }, [hash, isFirstLoad]);
};