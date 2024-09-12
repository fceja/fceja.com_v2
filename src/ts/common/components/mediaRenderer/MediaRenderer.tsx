import MP4VideoPlayer from "@common/components/videoPlayer/MP4VideoPlayer"

interface IMediaRenderer {
    hiResPath: string
    thumbnailPath: string
    type: string
}

const SUPPORTED_MEDIA_TYPES = [".mp4", ".svg"]

const MediaRenderer: React.FC<IMediaRenderer> = ({ hiResPath, thumbnailPath, type }) => {
    if (!SUPPORTED_MEDIA_TYPES.includes(type)) {
        console.warn("Media type not supported.")

        return null;
    }

    return (
        <>
            {type === ".svg" &&
                <div>Todo - SVG </div>
            }
            {type === ".mp4" &&
                <MP4VideoPlayer hiResPath={hiResPath} thumbnailPath={thumbnailPath} />
            }
        </>
    )
}
export default MediaRenderer