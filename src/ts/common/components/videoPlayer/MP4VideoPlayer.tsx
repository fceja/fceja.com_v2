import React, { useEffect, useRef, useState } from "react";

import "@scss/common/components/videoPlayer/VideoPlayer.scss"
import LoadingSpinner from "@common/components/loading/LoadingSpinner"

interface IMP4VideoPlayer {
    hiResPath: string
    thumbnailPath: string
}

const MP4VideoPlayer: React.FC<IMP4VideoPlayer> = ({ hiResPath, thumbnailPath }) => {
    let enterTimeout: NodeJS.Timeout;
    const [isMobile, setIsMobile] = useState(false);
    const [isVideoPlaybackError, setIsVideoPlaybackError] = useState(false)
    const [thumbnailBlobUrl, setThumbnailBlobUrl] = useState<string>("")
    const [videoBlobUrl, setVideoBlobUrl] = useState<string>("")
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        fetchThumbnail(thumbnailPath)

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

    const fetchThumbnail = async (thumbnailPath: string) => {
        try {
            const response = await fetch(thumbnailPath)
            if (!response.ok) { throw new Error("Error fetching image.") }

            const blob = await response.blob()
            const imageUrl = URL.createObjectURL(blob)
            setThumbnailBlobUrl(imageUrl)

        } catch (error) {
            console.error(error)
        }
    }

    const fetchVideo = async () => {
        const response = await fetch(hiResPath)
        const blob = await response.blob()

        const videoBlobUrl = URL.createObjectURL(blob)
        setVideoBlobUrl(videoBlobUrl)
    }

    const handleThumbnailClick = () => {
        if (isMobile) {
            setThumbnailBlobUrl("")
            fetchVideo()
            triggerVideoPlay()
        }
    }

    const handleThumbnailMouseEnter = () => {
        if (!isMobile) {
            // we delay video play for a couple ms
            enterTimeout = setTimeout(() => {
                setThumbnailBlobUrl("")
                fetchVideo()
            }, 750)
        }
    }

    const handleThumbnailMouseLeave = () => {
        clearTimeout(enterTimeout);
    }

    const requestFullscreenAndPlay = (video: HTMLVideoElement) => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
            (video as any).webkitRequestFullscreen();
        } else if ((video as any).msRequestFullscreen) {
            (video as any).msRequestFullscreen();
        }

        video.play();
    }

    const triggerVideoPlay = () => {
        const checkVideo = (count: number) => {
            const video = videoRef.current;
            if (video) {
                requestFullscreenAndPlay(video)
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

    const handleDesktopEvent = (e: React.MouseEvent<HTMLVideoElement>, eventType: string) => {
        const video = e.currentTarget;

        switch (eventType) {
            case 'mouseEnter':
                video.play();
                break
            case 'mouseLeave':
                video.pause();
                break
            case 'click':
                triggerVideoPlay()
                break
            default:
                throw new Error('Invalid eventType.')
        }
    }

    return (
        <>
            <div className="video-container">
                {isVideoPlaybackError && <div className="video-playback-error">Error playing video.</div>}
                {!thumbnailBlobUrl && !videoBlobUrl && <LoadingSpinner className="video" />}
                {thumbnailBlobUrl &&
                    <>
                        <div
                            className="video-thumbnail-img"
                            style={{ backgroundImage: `url(${thumbnailBlobUrl})` }}
                            onMouseEnter={handleThumbnailMouseEnter} // for desktop mouse entering
                            onMouseLeave={handleThumbnailMouseLeave} // for desktop mouse leaving
                            onClick={handleThumbnailClick} // for mobile & tablet touch
                        >
                        </div>
                        <div className="video-thumbnail-play-overlay">
                            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" />
                            </svg>
                        </div>
                    </>
                }
                {videoBlobUrl && !isMobile &&
                    <video
                        ref={videoRef}
                        muted
                        loop
                        onMouseEnter={(e) => { handleDesktopEvent(e, 'mouseEnter') }}
                        onMouseLeave={(e) => { handleDesktopEvent(e, 'mouseLeave') }}
                        onClick={(e) => { handleDesktopEvent(e, 'click') }}
                    >
                        <source src={videoBlobUrl} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                }
                {videoBlobUrl && isMobile && (
                    <video
                        ref={videoRef}
                        muted
                        controls
                        loop
                    >
                        <source src={videoBlobUrl} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                )}
            </div>
        </>
    );
};
// }
export default MP4VideoPlayer