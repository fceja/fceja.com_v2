import { useEffect, useState, useRef } from "react"

export const useHighlightJump = () => {
    const iconRef = useRef<HTMLElement | null>(null)
    const urlRef = useRef<HTMLElement | null>(null)
    const [isTriggerElemHovered, setIsTriggerElemHovered] =
        useState<{ isHovered: boolean, targetElem: null | Element }>(
            { isHovered: false, targetElem: null, }
        )

    useEffect(() => {
        const { isHovered, targetElem } = isTriggerElemHovered
        if (!isHovered || !targetElem) return;

        const iconUrlContainer = targetElem.childNodes[0]

        const svgIcon = iconUrlContainer.childNodes[0] as HTMLElement
        iconRef.current = svgIcon

        const linkUrl = iconUrlContainer.childNodes[targetElem.childNodes[0].childNodes.length - 1] as HTMLElement
        urlRef.current = linkUrl

        iconRef.current.classList.add('target-highlight', 'target-jump-up')
        urlRef.current.classList.add('target-highlight')

        return () => {
            if (iconRef.current) {
                iconRef.current.classList.remove('target-highlight', 'target-jump-up')
            }
            if (urlRef.current) {
                urlRef.current.classList.remove('target-highlight')
            }
        }

    }, [isTriggerElemHovered])

    return setIsTriggerElemHovered
}
