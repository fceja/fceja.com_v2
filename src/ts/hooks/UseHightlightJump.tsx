import { useEffect, useState, useRef } from "react"

export const useHighlightJump = () => {
    const [isRowHovered, setIsRowHovered] = useState({ isHovered: false, rowI: null })
    const linkIconRef = useRef(null)
    const linkUrlRef = useRef(null)

    useEffect(() => {
        const { isHovered, rowI } = isRowHovered

        if (isHovered) {
            const rowLinks = document.getElementById(`tr-${rowI}`)

            if (rowLinks) {
                // find and return first link
                const firstLink = (Array.from(rowLinks.childNodes).find(
                    (elem) => (elem as HTMLElement).id === "tr-links"
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