import { useEffect, useState, useRef } from "react"

export const useHighlightJump = () => {
    const [isRowHovered, setIsRowHovered] = useState({ isHovered: false, rowI: null })
    const linkIconRef = useRef(null)
    const linkUrlRef = useRef(null)

    useEffect(() => {
        if (isRowHovered.isHovered) {
            const rowLinks = document.getElementById(`t-row-${isRowHovered.rowI}`)

            if (rowLinks) {
                // find and return first link
                const firstLink = (Array.from(rowLinks.childNodes).find(
                    (elem) => (elem as HTMLElement).id === "row-links"
                )).childNodes[0]

                const aLink = firstLink.childNodes[0]
                linkIconRef.current = aLink as HTMLElement

                const linkUrl = firstLink.childNodes[firstLink.childNodes.length - 1]
                linkUrlRef.current = linkUrl as HTMLElement

                linkIconRef.current.classList.add('target-highlight', 'target-jump')
                linkUrlRef.current.classList.add('target-highlight')
            }
        }

        return () => {
            if (linkIconRef.current) {
                linkIconRef.current.classList.remove('target-highlight', 'target-jump')
                linkUrlRef.current.classList.remove('target-highlight')
            }
        }

    }, [isRowHovered])

    return setIsRowHovered
}