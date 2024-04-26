import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
    const [currIndex, setIndex] = useState(0);

    const sliderstyles = {
        height: "100%",
        position: "relative",
    };

    const slidestyles = {
        width: '100%',
        height: '100%',
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currIndex].url})`,
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    };

    const gotoprevious = () => {
        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
        setIndex(newIndex);
    };

    const gotonext = () => {
        const isLastSlide = currIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(gotonext, 10000); // Change slide every 10 seconds

        return () => {
            clearInterval(intervalId); // Cleanup on unmount
        };
    }, [currIndex]); // Re-run effect when currIndex changes

    return (
        <div style={sliderstyles}>
            <div style={leftArrowStyles} onClick={gotoprevious}>(</div>
            <div style={rightArrowStyles} onClick={gotonext}>)</div>
            <div style={slidestyles}></div>
        </div>
    );
};

export default Slider;
