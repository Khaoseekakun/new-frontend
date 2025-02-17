"use client"

import { useEffect, useState } from "react";

function useCountTo(targetNumber, duration) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = targetNumber / (duration / 1000 * 60);

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
                start = targetNumber;
                clearInterval(interval);
            }
            setCount(Math.round(start));
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [targetNumber, duration]);

    return count.toLocaleString();
}

function useTypingCarousel(words, delay) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [forward, setForward] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSubIndex((prev) => (forward ? prev + 1 : prev - 1));
            if (subIndex === words[index].length + 15 && forward) {
                setForward(false);
            } else if (subIndex === 0 && !forward) {
                setForward(true);
                setIndex((prev) => (prev + 1) % words.length);
            }
        }, forward ? delay : delay / 2);

        return () => clearTimeout(timeout);
    }, [subIndex, index, forward]);

    return words[index].substring(0, subIndex);
}

export default function Card() {
    const count1 = useCountTo(35437, 2000);
    const count2 = useCountTo(4452805, 2000);
    const count3 = useCountTo(18, 2000);

    const words = ["Astray Entertainment", "Creating Future", "Innovative Solutions"];
    const typingText = useTypingCarousel(words, 100);
    return (
        <>
            <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 ">
                <section className="pt-3 pb-4" id="count-stats">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto py-3">
                                <div className="row">
                                    <div className="col-md-4 position-relative animate__animated animate__fadeInDown">
                                        <div className="p-3 text-center">
                                            <h1 className="text-gradient text-info"><span>{count1}</span>+</h1>
                                            <h5 className="mt-3">เซิร์ฟเวอร์</h5>
                                            <p className="text-sm font-weight-normal">จำนวนเซิร์ฟเวอร์ที่มะปรางถูกเชิญ</p>
                                        </div>
                                        <hr className="vertical dark" />
                                    </div>
                                    <div className="col-md-4 position-relative animate__animated animate__fadeInDown">
                                        <div className="p-3 text-center">
                                            <h1 className="text-gradient text-info"> <span>{count2}</span>+</h1>
                                            <h5 className="mt-3">สมาชิก</h5>
                                            <p className="text-sm font-weight-normal">จำนวนสมาชิกที่อยู่ในแต่ละเซิร์ฟเวอร์</p>
                                        </div>
                                        <hr className="vertical dark" />
                                    </div>
                                    <div className="col-md-4 position-relative animate__animated animate__fadeInDown">
                                        <div className="p-3 text-center">
                                            <h1 className="text-gradient text-info"><span>{count3}</span></h1>
                                            <h5 className="mt-3">คลัสเตอร์ชาร์ด</h5>
                                            <p className="text-sm font-weight-normal">จำนวนหมวดหมู่ของคลัสเตอร์</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="row text-center ">
                                <div className="col-lg-6 mx-auto">
                                    <h2 className="animate__animated animate__bounceIn">บอทมะปราง</h2>
                                    <p className="lead">บอทดิสคอร์ดที่พัฒนาโดยคนไทย เหมาะสำหรับทุกเซิร์ฟเวอร์ ดิสคอร์ด </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mt-sm-5">
                    <div className="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" style={{ backgroundImage: 'url("https://yt3.googleusercontent.com/QL7gcDbRpAWxyG6BkhqViF7TL_CL1xQawQPVxpOaJRdemSKkLJylW5HCTS7htDOKHYK9d_jG=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj")' }} loading="lazy">
                        <span className="mask bg-gradient-dark" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 ms-lg-8">
                                    <h1 className="text-white">| {typingText}</h1>
                                    <p className="lead text-white opacity-8">เป็นหนึ่งในแผนกของ Astray Corp. ซึ่งรับผิดชอบการจัดทำและบริหารศิลปินเสมือนจริง (Virtual Artist) โดย Astray Entertainment ก่อตั้งขึ้นในช่วงปลายปี 2023 มีจุดประสงค์เพื่อเป็นสื่อกลางในการสื่อสารระหว่างกลุ่มคนทั่วไปและกลุ่มคนรุ่นใหม่ ด้วยมาตรฐานการทำงานของ Astray Corp เราตั้งเป้าหมายไว้ให้ทาเลนท์ภายใต้การดูแลของ Astray Entertainment สามารถผลิตเนื้อหาและคอนเทนต์ออนไลน์ได้อย่างมีคุณภาพ สร้างคอมมูนิตี้ที่มั่นคงและสร้างสรรค์ให้กับผู้ติดตามและศิลปินที่เกี่ยวข้องทั่วประเทศไทย</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
