import Mp4VideoPlayer, { TMp4VideoPlayer } from "@common/components/mp4VideoPlayer/Mp4VideoPlayer"
import PngThumbnail, { TPngThumbnail } from "@common/components/pngThumbnail/PngThumbnail"

interface IMediaRenderer {
    media: TMp4VideoPlayer | TPngThumbnail | null
}

const SUPPORTED_MEDIA_TYPES = [".mp4", ".png"]

const MediaRenderer: React.FC<IMediaRenderer> = ({ media }) => {
    if (!media || !SUPPORTED_MEDIA_TYPES.includes(media.type)) {
        console.warn("Media type not supported.")

        return null;
    }
    return (
        <>
            {media && media.type === ".mp4" &&
                <Mp4VideoPlayer videoData={media as TMp4VideoPlayer} />
            }
            {media && media.type === ".png" &&
                <PngThumbnail pngData={media as TPngThumbnail} />
            }
        </>
    )
}
export default MediaRenderer