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
                className={`outer-container${isCollapsed ? "-collapsed" : "-expanded"}`}
                onClick={handleClick}
            >
                <div className={`stationary-content${isCollapsed ? "-collapsed" : "-expanded"}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Collapsible