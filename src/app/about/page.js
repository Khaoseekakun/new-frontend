'use client'
import React, { useState, useEffect } from 'react';

export default function About() {
    const [typedText1, setTypedText1] = useState('');
    const [typedText2, setTypedText2] = useState('');

    const fullText2 = 'หนึ่งในแผนกของ Astray Corp. ซึ่งรับผิดชอบพัฒนาและเผยแพร่วิดีโอเกม (Video Games) โดย Astray Game Studio ก่อตั้งขึ้นในช่วงปี 2021 มีจุดประสงค์เพื่อเป็นสื่อที่มอบความบันเทิงอย่างสร้างสรรค์พร้อมพลักดันสังคม เสริมสร้างความรู้และความสามารถให้กับกลุ่มคนรุ่นใหม่ ด้วยมาตรฐานการทำงานของ Astray Corp ทำให้วิดีโอเกมภายใต้การพัฒนาและเผยแพร่ของ Astray Game Studio สามารถผลิตเนื้อหาได้อย่างมีคุณภาพและสร้างสรรค์ สร้างคอมมูนิตี้วิดีโอเกม ที่มั่นคงให้กับผู้เล่นและผู้ที่เกี่ยวข้องทั่วประเทศไทยและเอเชีย';
    const fullText1 = 'เป็นหนึ่งในแผนกของ Astray Corp. ซึ่งรับผิดชอบการจัดทำและบริหารศิลปินเสมือนจริง (Virtual Artist) โดย Astray Entertainment ก่อตั้งขึ้นในช่วงปลายปี 2023 มีจุดประสงค์เพื่อเป็นสื่อกลางในการสื่อสารระหว่างกลุ่มคนทั่วไปและกลุ่มคนรุ่นใหม่ ด้วยมาตรฐานการทำงานของ Astray Corp เราตั้งเป้าหมายไว้ให้ทาเลนท์ภายใต้การดูแลของ Astray Entertainment สามารถผลิตเนื้อหาและคอนเทนต์ออนไลน์ได้อย่างมีคุณภาพ สร้างคอมมูนิตี้ที่มั่นคงและสร้างสรรค์ให้กับผู้ติดตามและศิลปินที่เกี่ยวข้องทั่วประเทศไทย';

    const typeText = (fullText, setText) => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 10);
    };

    useEffect(() => {
        typeText(fullText1, setTypedText1);
        typeText(fullText2, setTypedText2);
    }, []);

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="card card-body shadow-xl mx-3 mx-md-4 top-50">
                <section className="py-7">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="row justify-content-start">
                                    <div className="col-md-12">
                                        <div className="info">
                                            <h1 className='card-hover-effect'>Astray Entertainment</h1>
                                            <p>{typedText1}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-start mt-4">
                                    <div className="col-md-12">
                                        <div className="info">
                                            <h1 className='card-hover-effect'>Astray Game Studio</h1>
                                            <p>{typedText2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
                                <div className="card card-hover-effect">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <a className="d-block blur-shadow-image">
                                            <img src="/maprang.webp" alt="" className="img-fluid border-radius-lg" loading="lazy" />
                                        </a>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="font-weight-normal">
                                            <a href="javascript:;">Maprang Vtuber</a>
                                        </h5>
                                        <p className="mb-0">
                                            เตรียมพบกับ บอทดิสคอร์ดที่มีผู้ใช้งานกว่า 5 ล้านคน สู่ศิลปินสาวคนแรกของ แอสเทรย์ เอนเตอร์เทนเมนท์
                                        </p>
                                        <a href="https://www.youtube.com/@Maprang_Astray" className="btn bg-gradient-info mb-0 mt-3 col-12">รับชม</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
