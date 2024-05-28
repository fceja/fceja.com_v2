import { useEffect, useState, useRef } from "react"

export const useHighlightJump = () => {
    const linkIconRef = useRef(null)
    const linkUrlRef = useRef(null)
    const [isTriggerElemHovered, setIsTriggerElemHovered] =
        useState<{ isHovered: boolean, targetElem: null | Element }>(
            { isHovered: false, targetElem: null, }
        )

    useEffect(() => {
        const { isHovered, targetElem } = isTriggerElemHovered
        if (!isHovered || !targetElem) return;

        const aLink = targetElem.childNodes[0]
        linkIconRef.current = aLink

        const linkUrl = targetElem.childNodes[targetElem.childNodes.length - 1]
        linkUrlRef.current = linkUrl

        linkIconRef.current.classList.add('target-highlight', 'target-jump')
        linkUrlRef.current.classList.add('target-highlight')
        return () => {

            if (linkIconRef.current) {
                linkIconRef.current.classList.remove('target-highlight', 'target-jump')
                linkUrlRef.current.classList.remove('target-highlight')
            }
        }

    }, [isTriggerElemHovered])

    return setIsTriggerElemHovered
}
