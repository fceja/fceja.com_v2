import { useEffect, useState } from "react";

import "@scss/common/components/Collapsible.scss"

interface CollapsibleI {
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleI> = (props) => {
    const { children } = props
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isSpinning, setIsSpinning] = useState(false)

    useEffect(() => {
    }, [isCollapsed])

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
        setIsSpinning(!isSpinning)
    }

    return (
        <>
            <div
                className={`
                collapsible-div ${isCollapsed ? "collapsed" : "expanded"}
                ${isSpinning ? "spin-clockwise" : "spin-counter-clockwise"}
                `}
                onClick={handleClick}
            >
                <div
                    className={`
                    stationary-content
                    ${isSpinning ? "spin-counter-clockwise" : "spin-clockwise"}
                    `}
                >
                    {children}
                </div>
            </div>
        </>
    )
}
export default Collapsible