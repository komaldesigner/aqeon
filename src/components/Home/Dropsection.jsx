import React, { useEffect, useRef } from "react";
import './Dropsection.css';
import dropvideo from "../../assets/banner/video2.mp4";

const Dropsection = () => {
    const vidRef3 = useRef(null);

    useEffect(() => {
        const video = vidRef3.current;
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        video.play().catch(error => {
            console.error("Error trying to autoplay video:", error);
        });
    }, []);

    return (
        <div className="hmbnnrvideo1">
            <video ref={vidRef3} muted>
                <source src={dropvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay-textvideo">
                because every drop counts
            </div>
        </div>
    );
};

export default Dropsection;
