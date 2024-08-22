import { useEffect, useRef, useState } from "react";

import "@scss/common/components/Collapsible.scss"

interface CollapsibleI {
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleI> = (props) => {
    const { children } = props
    const [isCollapsed, setIsCollapsed] = useState(true)
    const outerContainerRef = useRef<HTMLDivElement | null>(null);
    const stationaryContainerRef = useRef<HTMLDivElement | null>(null);
    const [firstMount, setFirstMount] = useState(true);

    useEffect(() => {
        setFirstMount(false)
    }, [])

    useEffect(() => {
        const divOuter = outerContainerRef.current
        const divStationary = stationaryContainerRef.current
        if (!divOuter || !divStationary) { return };

        /* handle expanded to collapsed, div's are '-collapsed' */
        const handleCollapse = async () => {
            divOuter.style.transition = 'border 1s';
            divOuter.style.border = 'solid 1px rgba(255, 255, 255, 1)';

            await new Promise<void>((resolve) => {
                /* outer div */
                divOuter.style.transition = "transform 1s";
                divOuter.style.transform = "scale(0.1) rotate(-360deg)";

                /* inner stationary div */
                divStationary.style.transition = "transform 1s";
                divStationary.style.transform = "rotate(360deg)";

                // wait for scale transition to complete, then hide and remove from doc flow
                divOuter.addEventListener('transitionend', function handler(event) {
                    if (event.propertyName === 'transform') {
                        divOuter.removeEventListener('transitionend', handler);
                        divOuter.style.position = "absolute";
                        divOuter.style.visibility = "hidden";
                        resolve();
                    }
                });
            });
        }

        /* handle collapsed to expanded, div's are '-expanded' */
        const handleExpand = async () => {
            /* outer div */
            divOuter.style.position = "relative"
            divOuter.style.visibility = "visible"
            divOuter.style.transition = 'border 1s, transform 1s';
            divOuter.style.border = 'solid 1px rgba(255, 255, 255, 1)';
            divOuter.style.transform = 'scale(1) rotate(360deg)';

            /* inner stationary div */
            divStationary.style.transition = "transform 1s";
            divStationary.style.transform = "rotate(-360deg)";

            /* wait for transition to complete, then hide outer border */
            await new Promise<void>((resolve) => {
                divOuter.addEventListener('transitionend', function handler() {
                    divOuter.removeEventListener('transitionend', handler);
                    divOuter.style.transition = 'border-color 1s';
                    divOuter.style.borderColor = 'rgba(255, 255, 255, 0)';
                    console.log('resolved handle expand')
                    resolve();
                });
            });
        }

        if (isCollapsed) {
            if (firstMount) {
                handleFirstMount()
            } else {
                handleCollapse()
            }
        }
        else { handleExpand() }

    }, [isCollapsed])

    const handleFirstMount = () => {
        const divOuter = outerContainerRef.current
        const divStationary = stationaryContainerRef.current
        if (!divOuter || !divStationary) { return };

        divOuter.style.position = "absolute"
        divOuter.style.visibility = "hidden"
        divOuter.style.transform = "scale(0.1)"
    }

    const handlePlusOrMinusClick = () => { setIsCollapsed(!isCollapsed) }

    return (
        <>
            {isCollapsed ?
                <div className="icon-plus" onClick={handlePlusOrMinusClick}>+</div>
                :
                <div className="icon-minus" onClick={handlePlusOrMinusClick}>-</div>
            }
            <div
                ref={outerContainerRef}
                className={`outer-container${isCollapsed ? "-collapsed" : "-expanded"}`}
            >
                <div ref={stationaryContainerRef} className={`stationary-content${isCollapsed ? "-collapsed" : "-expanded"}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Collapsible