import { useEffect, useState } from "react";

import "@scss/common/components/Collapsible.scss"

interface CollapsibleI {
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleI> = (props) => {
    const { children } = props
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [lastSpunDirection, setLastSpunDirection] = useState(false)

    useEffect(() => {
        console.log(`isCollapsed -> ${isCollapsed}`)
    }, [isCollapsed])

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
        setLastSpunDirection(!lastSpunDirection)
    }

    return (
        <>
            <div
                className={`collapsible-div ${isCollapsed ? "collapsed" : "expanded"} ${lastSpunDirection ? "spun-clockwise" : "spun-counter-clockwise"}`}
                onClick={handleClick}
            >
                <div
                    className={`stationary-content ${isCollapsed ? "collapsed" : "expanded"} ${lastSpunDirection ? "spun-counter-clockwise" : "spun-clockwise"}`}
                >
                    {children}
                </div>
            </div>
        </>
    )
}
export default Collapsible