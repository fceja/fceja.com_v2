import React, { useEffect, useState } from "react";

import "@scss/common/components/pngThumbnail/PngThumbnail.scss"
import LoadingSpinner from "@common/components/loading/LoadingSpinner"

export type TPngThumbnail = {
    thumbnailPath: string
    type: string
}

interface IPngThumbnail {
    pngData: TPngThumbnail
}

const PngThumbnail: React.FC<IPngThumbnail> = ({ pngData }) => {
    const [thumbnailBlobUrl, setThumbnailBlobUrl] = useState<string>("")

    useEffect(() => {

        const fetchThumbnail = async () => {
            try {
                const response = await fetch(pngData.thumbnailPath)
                if (!response.ok) { throw new Error("Error fetching image.") }

                const blob = await response.blob()
                const imageUrl = URL.createObjectURL(blob)
                setThumbnailBlobUrl(imageUrl)

            } catch (error) {
                console.error(error)
            }

        }

        fetchThumbnail()

    }, [])

    useEffect(() => {
        console.log(`thumbnailBlobUrl`)
        console.log(thumbnailBlobUrl)

    }, [thumbnailBlobUrl])

    return (
        <div className="png-thumbnail-container">
            {!thumbnailBlobUrl && <LoadingSpinner className="png-thumbnail" />}
            {thumbnailBlobUrl &&
                <div className="png-thumbnail-img" style={{ backgroundImage: `url(${thumbnailBlobUrl})` }} />
            }
        </div>
    )
}
export default PngThumbnail