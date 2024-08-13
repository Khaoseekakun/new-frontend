'use client'
import { useState, useEffect } from "react";

export default function Carousel() {
    const [bgImage, setBg] = useState(0);
    const [animClass, setAnimClass] = useState('');

    const imageList = [
        "/assets/img/maprang3.webp",
        "/assets/img/maprang1.webp",
        "/assets/img/maprang2.webp"
    ];

    /**
     * @param {number} currentIndex
     * @param {number} change
     * @param {number} totalImages
     * @returns {number}
     */
    function checkImage(currentIndex, change, totalImages) {
        setAnimClass('animate__fadeOut');
        const newIndex = (currentIndex + change + totalImages) % totalImages;

        setTimeout(() => {
            setBg(newIndex);
            setAnimClass('animate__fadeIn');
        }, 500)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            checkImage(bgImage, 1, imageList.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [bgImage, imageList.length]);

    return (
        <header className="header-2">
            <div id="Carousel" className={`page-header min-vh-75 relative animate__animated ${animClass}`} style={{ backgroundImage: `url(${imageList[bgImage]})` }}>
                <span className="mask opacity-4" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-white pt-7 mt-n5 animate-charcter">Maprang</h1>
                            <p className="lead text-white mt-3">
                                Astray Entertainment <br />
                                Memory Archive Protocol for Remembrance And Navigation Genetic <br />
                                โปรโตคอลการเก็บถาวรหน่วยความจำสำหรับการจดจำและการนำทางทางพันธุกรรม
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 mx-auto">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <button className="carousel-control-prev" type="button" onClick={() => checkImage(bgImage, -1, imageList.length)}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">ย้อน</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-slide="next" onClick={() => checkImage(bgImage, 1, imageList.length)}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">ถัดไป</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
