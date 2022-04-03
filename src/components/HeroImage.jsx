import React, { useState, useEffect } from "react";
import heroMobile from "../images/hero-mobile.jpg";
import heroDesktop from "../images/hero-desktop.jpg";

function HeroImage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth < 992 ? heroMobile : heroDesktop;

    useEffect(function() {
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (<img src={imageUrl} alt="hero img" />);
}

export default HeroImage;