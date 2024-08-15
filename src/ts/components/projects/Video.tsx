import React, { useEffect, useState } from "react";

import "@scss/components/projects/Video.scss"

interface VideoI {
    projectData: any;
}

const Video: React.FC<VideoI> = (props) => {
    const { projectData } = props;
    const [isMobile, setIsMobile] = useState(false);
    const [thumbnailPath, setThumbnailPath] = useState(projectData.videoThumbnailPath);

    useEffect(() => {
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

    const handleVideoClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
        if (video) {
            video.play();
            setThumbnailPath("");

            // fullscreen mode
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if ((video as any).webkitRequestFullscreen) {
                (video as any).webkitRequestFullscreen();
            } else if ((video as any).msRequestFullscreen) {
                (video as any).msRequestFullscreen();
            }
        }
    };

    return (
        <div className="video-container">
            {!isMobile && (
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
                    <source src={projectData.videoPath} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            )}
            {isMobile && (
                <div
                    className="mobile-play-container"
                    style={{
                        backgroundImage: `url("${thumbnailPath}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    onClick={handleVideoClick}
                >
                    <video muted controls>
                        <source src={projectData.videoPath} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                </div>
            )}
        </div>
    );
};

export default Video;
