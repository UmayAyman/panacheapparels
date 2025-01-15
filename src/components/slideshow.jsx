import React, { useEffect, useState } from "react";
import './slideshow.css';

const Slideshow = () => {
    const images = [
        "https://tidymalism.com/wp-content/uploads/2022/10/ten-signs-you-have-too-many-clothes-1160x580.jpg",
        "https://www.dolmanlaw.com/wp-content/uploads/2015/11/household-items-product-liability.jpg",
        "https://i.pinimg.com/originals/1a/a1/00/1aa100d5520acf162ef98d21a62b6deb.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slideshow-container">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ width: "100%", height: "600px" }}
            />
        </div>
    );
};

export default Slideshow;
