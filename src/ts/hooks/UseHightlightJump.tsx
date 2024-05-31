import { useEffect, useState, useRef } from "react"

export const useHighlightJump = () => {
    const iconRef = useRef(null)
    const urlRef = useRef(null)
    const [isTriggerElemHovered, setIsTriggerElemHovered] =
        useState<{ isHovered: boolean, targetElem: null | Element }>(
            { isHovered: false, targetElem: null, }
        )

    useEffect(() => {
        const { isHovered, targetElem } = isTriggerElemHovered
        if (!isHovered || !targetElem) return;

        const iconUrlContainer = targetElem.childNodes[0]

        const svgIcon = iconUrlContainer.childNodes[0]
        iconRef.current = svgIcon

        const linkUrl = iconUrlContainer.childNodes[targetElem.childNodes[0].childNodes.length - 1]
        urlRef.current = linkUrl

        iconRef.current.classList.add('target-highlight', 'target-jump-up')
        urlRef.current.classList.add('target-highlight')

        return () => {
            if (iconRef.current) {
                iconRef.current.classList.remove('target-highlight', 'target-jump-up')
                urlRef.current.classList.remove('target-highlight')
            }
        }

    }, [isTriggerElemHovered])

    return setIsTriggerElemHovered
}
