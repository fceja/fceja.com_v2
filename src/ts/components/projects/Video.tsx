import React, { useEffect, useRef, useState } from "react";

import "@scss/components/projects/Video.scss"
import LoadingSpinner from "@common/components/LoadingSpinner"

interface VideoI {
    projectData: any;
}

const Video: React.FC<VideoI> = (props) => {
    const { projectData } = props;
    const [isMobile, setIsMobile] = useState(false);
    const [isVideoPlaybackError, setIsVideoPlaybackError] = useState(false)
    const [thumbnailBlobUrl, setThumbnailBlobUrl] = useState<string>("")
    const [videoBlobUrl, setVideoBlobUrl] = useState<string>("")
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        fetchImage()

        const detectDeviceType = () => {
            /* check if mobile or tablet */
            setIsMobile(navigator.maxTouchPoints > 0);
        };

        detectDeviceType();
        window.addEventListener("resize", detectDeviceType);

        return () => {
            window.removeEventListener("resize", detectDeviceType);
        };
    }, []);

    useEffect(() => {

        return () => {
            if (thumbnailBlobUrl) {
                URL.revokeObjectURL(thumbnailBlobUrl)
            }
        };
    }, [thumbnailBlobUrl])

    useEffect(() => {

        return () => {
            if (videoBlobUrl) {
                URL.revokeObjectURL(videoBlobUrl)
            }
        };
    }, [videoBlobUrl])

    const fetchImage = async () => {
        try {
            const response = await fetch(projectData.videoThumbnailPath)
            if (!response.ok) { throw new Error("Error fetching image.") }

            const blob = await response.blob()
            const imageUrl = URL.createObjectURL(blob)
            setThumbnailBlobUrl(imageUrl)

        } catch (error) {
            console.error(error)
        }
    }

    const fetchVideo = async () => {
        const response = await fetch(projectData.videoPath)
        const blob = await response.blob()

        const videoBlobUrl = URL.createObjectURL(blob)
        setVideoBlobUrl(videoBlobUrl)

    }

    const handleThumbnailClick = () => {
        if (isMobile) {
            setThumbnailBlobUrl("")
            fetchVideo()
            waitVideoLoad()
        }
    }

    const handleMouseEnter = () => {
        if (!isMobile) {
            setThumbnailBlobUrl("")
            fetchVideo()
        }
    }

    const requestFullscreen = (video: HTMLVideoElement) => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
            (video as any).webkitRequestFullscreen();
        } else if ((video as any).msRequestFullscreen) {
            (video as any).msRequestFullscreen();
        }

    }

    const waitVideoLoad = () => {
        const video = videoRef.current;
        const checkVideo = (count: number) => {
            if (video) {
                video.play();
                requestFullscreen(video)
                return;
            }

            /* 3 sec, 12 tries at 250ms intervals */
            if (count < 12) {
                setTimeout(() => checkVideo(count + 1), 250);
            } else {
                setIsVideoPlaybackError(true)
            }

        }

        checkVideo(0)
    }

    return (
        <>
            <div className="video-container">
                {isVideoPlaybackError && <div className="video-playback-error">Error playing video.</div>}
                {!thumbnailBlobUrl && !videoBlobUrl && <LoadingSpinner className="video" />}
                {thumbnailBlobUrl &&
                    <div
                        className="thumbnail-img"
                        style={{
                            backgroundImage: `url(${thumbnailBlobUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onClick={handleThumbnailClick}
                    >
                    </div>
                }
                {videoBlobUrl && !isMobile &&
                    <video
                        muted
                        loop
                        onMouseEnter={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            video.play();
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            video.pause();
                        }}
                        onClick={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            if (video.requestFullscreen) {
                                video.requestFullscreen();
                            } else if ((video as any).webkitRequestFullscreen) {
                                (video as any).webkitRequestFullscreen();
                            } else if ((video as any).msRequestFullscreen) {
                                (video as any).msRequestFullscreen();
                            }
                        }}
                    >
                        <source src={videoBlobUrl} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                }
                {videoBlobUrl && isMobile && (
                    <video ref={videoRef} muted controls>
                        <source src={videoBlobUrl} type="video/mp4" />
                        Your browser does not support the video.
                    </video>

                )}
            </div>
        </>
    );
};

export default Video;