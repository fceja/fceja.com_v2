import { useEffect, useRef, useState } from "react";

import "@scss/common/components/Collapsible.scss"

interface CollapsibleI {
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleI> = (props) => {
    const { children } = props
    const [isCollapsed, setIsCollapsed] = useState(true)
    const outerContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const div = outerContainerRef.current
        if (!div) { return };

        if (isCollapsed) {
            const checkOpacity = () => {
                const opacity = window.getComputedStyle(div).opacity;

                if (Number(opacity) < 0.15) {
                    div.style.position = "absolute";
                    div.style.visibility = "hidden";
                } else {
                    requestAnimationFrame(checkOpacity);
                }
            }

            requestAnimationFrame(checkOpacity);

        } else {
            div.style.position = "static"
            div.style.visibility = "visible"
        }

    }, [isCollapsed])

    const handlePlusOrMinusClick = () => { setIsCollapsed(!isCollapsed) }

    return (
        <>
            {isCollapsed ?
                <div className="icon-plus" onClick={handlePlusOrMinusClick}>+</div>
                :
                <div className="icon-minus" onClick={handlePlusOrMinusClick}>-</div>
            }
            <div ref={outerContainerRef} className={`outer-container${isCollapsed ? "-collapsed" : "-expanded"}`}>
                <div className={`stationary-content${isCollapsed ? "-collapsed" : "-expanded"}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Collapsible