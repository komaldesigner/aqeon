import React, { useEffect, useRef } from "react";
import './Banner.css';
import videoSrc from "../../assets/banner/video.mp4";
import contactBanner from "../../assets/banner/video3.mp4";

const Banner = ({ index, startText, centerText, endText, isvalue, isanothervalue }) => {
    const vidRef1 = useRef();
    const vidRef2 = useRef();

    useEffect(() => {
        if (vidRef1.current) {
            vidRef1.current.muted = true;
        }
        if (vidRef2.current) {
            vidRef2.current.muted = true;
        }
    }, [index]);

    const renderItem = () => {
        switch (index) {
            case 'home':
                return (
                    <>
                        <video autoPlay loop muted playsInline ref={vidRef1}>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </>
                );
            case 'contact':
                return (
                    <>
                        <video autoPlay loop muted playsInline ref={vidRef2}>
                            <source src={contactBanner} type="video/mp4" />
                        </video>
                    </>
                );
            case 'products':
                return (
                    <>
                    </>
                );
            case 'products2':
                return (
                    <>
                    </>
                );
            case 'brandpartners':
                return (
                    <>
                    </>
                 );

            default:
                return (
                    <div>
                        <p>Page not found</p>
                    </div>
                );
        }
    }
    const bannerclass = () => {

        switch (index) {
            case 'home':
                return 'overlay-text';
            case 'contact':
                return 'contact-text';

            case 'products':
                return 'hmbnnrtxtproduct';

            case 'products2':
                return 'hmbnnrtxtproductother';

            case 'brandpartners':
                return 'hmbnnrtxtbrandpartners';

            default:
                return '';
        }
    };

    const bannername = () => {

        switch (index) {
            case 'home':
                return 'hmbnnr1';

            case 'contact':
                return 'hmbnnr1';

            case 'products':
                return 'hmbnnrproduct';

            case 'products2':
                return 'hmbnnrproductother';

            case 'brandpartners':
                return 'hmbnnrbrandpartner';

            default:
                return '';
        }
    };





    const firsthalf = centerText.slice(0, 14);
    const secondhalf = centerText.slice(15, 30);
    const endfisrt = endText.slice(0, 14);
    const endsend = endText.slice(15, 25);
    const endthrd = endText.slice(25, 35);

    return (
        <div className={bannername()} >
            {renderItem()}
            <div className={bannerclass()}>
                {startText} {isvalue === true ? <span>{centerText}</span> : <span>{firsthalf}<p>{secondhalf}</p></span>} {
                    isanothervalue === true ? <h4>{endText}</h4> : <h4>{endfisrt}<span style={index == 'brandpartners'?{display:"none"}:{} }>{endsend}</span>{endthrd}</h4> 
                }
            </div>
        </div>
    );
};

export default Banner;
