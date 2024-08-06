'use client'
import { useState } from "react";

export default function Carousel() {
    const [bgImage, setBg] = useState(0);

    const imageList = [
        "/assets/img/maprang1.jpg",
        "/assets/img/maprang2.jpg",
        "/assets/img/maprang3.png"
    ];

    /**
     * @param {number} currentIndex
     * @param {number} change
     * @param {number} totalImages
     * @returns {number}
     */
    function checkImage(currentIndex, change, totalImages) {
        const newIndex = (currentIndex + change + totalImages) % totalImages;
        setBg(newIndex);
    }

    return (
        <header className="header-2">
            <div id="Carousel" className="page-header min-vh-75 relative" style={{ backgroundImage: `url(${imageList[bgImage]})` }}>
                <span className="mask opacity-4" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-white pt-3 mt-n5">Maprang</h1>
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
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-slide="next" onClick={() => checkImage(bgImage, 1, imageList.length)}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
