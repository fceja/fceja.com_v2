import { useEffect, useRef, useState } from "react";
import "@scss/common/components/Collapsible.scss";

interface CollapsibleI {
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleI> = (props) => {
    const { children } = props;
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const outerContainerRef = useRef<HTMLDivElement | null>(null);
    const stationaryContainerRef = useRef<HTMLDivElement | null>(null);
    const [firstMount, setFirstMount] = useState(true);

    useEffect(() => {
        setFirstMount(false);
    }, []);

    useEffect(() => {
        const divOuter = outerContainerRef.current;
        const divStationary = stationaryContainerRef.current;
        if (!divOuter || !divStationary) return;

        const handleTransition = async () => {
            if (!isCollapsed) {
                await handleExpand();
                return
            }

            if (firstMount) { handleFirstMount(); }
            else { await handleCollapse(); }
        };

        handleTransition();

    }, [isCollapsed]);


    const handleCollapse = async () => {
        console.log('starting - handleCollapse');
        setIsTransitioning(true)
        const divOuter = outerContainerRef.current;
        const divStationary = stationaryContainerRef.current;
        if (!divOuter || !divStationary) return;

        divOuter.style.transition = 'border 1s';
        divOuter.style.border = 'solid 1px rgba(255, 255, 255, 1)';

        await new Promise<void>((resolve) => {
            divOuter.style.transition = "transform 1s";
            divOuter.style.transform = "scale(0.05)";

            divStationary.style.transition = "transform 1s";
            divStationary.style.transform = "rotate(0deg)";

            divOuter.addEventListener('transitionend', function collapseEventHandler(event) {
                if (event.propertyName === 'transform') {
                    divOuter.removeEventListener('transitionend', collapseEventHandler);
                    divOuter.style.position = "absolute";
                    divOuter.style.visibility = "hidden";
                    console.log('resolved - handleCollapse');
                    setIsTransitioning(false)
                    resolve();
                }
            });
        });
    };

    const handleExpand = async () => {
        console.log('starting - handleExpand');
        setIsTransitioning(true)
        const divOuter = outerContainerRef.current;
        const divStationary = stationaryContainerRef.current;
        if (!divOuter || !divStationary) return;

        divOuter.style.position = "relative";
        divOuter.style.visibility = "visible";
        divOuter.style.transition = 'border 1s, transform 1s';
        divOuter.style.border = 'solid 1px rgba(255, 255, 255, 1)';
        divOuter.style.transform = 'scale(1) rotate(180deg)';

        divStationary.style.transition = "transform 1s";
        divStationary.style.transform = "rotate(-180deg)";

        await new Promise<void>((resolve) => {
            divOuter.addEventListener('transitionend', function expandEventHandler(event) {
                if (event.propertyName === 'transform') {
                    divOuter.removeEventListener('transitionend', expandEventHandler);
                    divOuter.style.transition = 'border-color 1s';
                    divOuter.style.borderColor = 'rgba(255, 255, 255, 0)';
                    console.log('resolved - handleExpand');
                    resolve(setIsTransitioning(false));
                }
            });
        });
    };

    const handleFirstMount = () => {
        const divOuter = outerContainerRef.current;
        const divStationary = stationaryContainerRef.current;
        if (!divOuter || !divStationary) return;

        divOuter.style.position = "absolute";
        divOuter.style.visibility = "hidden";
        divOuter.style.transform = "scale(0.1)";

        divStationary.style.display = "inline-block";
    };

    const handlePlusOrMinusClick = () => {
        if (isTransitioning) { return }
        setIsCollapsed(!isCollapsed);
    };

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
    );
};

export default Collapsible;