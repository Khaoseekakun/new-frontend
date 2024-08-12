import Carousel from "../components/carousel";

export default function Service() {
    return (
        <>
            <Carousel />
            <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
                <section className="py-sm-7 py-5 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto">
                                <div className="mt-n8 mt-md-n9 text-center animate__animated animate__zoomIn">
                                    <div className="avatar-border">
                                        <img className="avatar heart-beat avatar-xxl shadow-xl position-relative z-index-2 animate__animated animate__pulse animate__infinite" src="../MaprangProfile.png" alt="bruce" />
                                    </div>
                                </div>
                                <div className="row py-5">
                                    <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="mb-0">Maprang</h3>
                                            <div className="d-block">
                                                <button type="button" className="btn btn-sm btn-outline-info text-nowrap mb-0">Follow</button>
                                            </div>
                                        </div>
                                        <p className="text-lg mb-0">
                                            บอทฟังเพลงที่มีทุกบ้านเกิดใหม่เป็นวีแล้วค่ะ
                                            [Debut Stream] 3 สิงหาคม 2024 เวลา 20:00
                                            Youtube. : @Maprang_Astray
                                            website: astraycorp.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="mb-5">ตัวอย่าง บริการของเรา</h3>
                            </div>
                        </div>
                        <div className="row animate__animated animate__bounceIn">
                            <div className="col-lg-3 col-sm-6 animate__animated animate__fadeIn">
                                <div className="card card-plain card-hover-effect">
                                    <div className="card-header p-0 position-relative">
                                        <a className="d-block blur-shadow-image">
                                            <img src="../service1.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                                        </a>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5>
                                            <a href="javascript:;" className="text-dark font-weight-bold">ระบบจัดการห้องเสียงอัตโนมัติ</a>
                                        </h5>
                                        <p>
                                            ช่วยให้คุณใช้งานห้องเสียงได้อย่างมีประสิทธิ์ภาพ และสะดวกสบายมากขึ้น
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 animate__animated animate__fadeIn">
                                <div className="card card-plain card-hover-effect">
                                    <div className="card-header p-0 position-relative">
                                        <a className="d-block blur-shadow-image">
                                            <img src="../service2.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                                        </a>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5>
                                            <a href="javascript:;" className="text-dark font-weight-bold">ระบบเปิดเพลง</a>
                                        </h5>
                                        <p>
                                            ช่วยทำให้คุณสามารถฟังเพลงได้โดยที่ไม่มีโฆษณา และ สามารถแชร์เพลงของคุณให้กับเพื่อนๆได้อีกด้วย
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 animate__animated animate__fadeIn">
                                <div className="card card-plain card-hover-effect">
                                    <div className="card-header p-0 position-relative">
                                        <a className="d-block blur-shadow-image">
                                            <img src="../service3.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                                        </a>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5>
                                            <a href="javascript:;" className="text-dark font-weight-bold">ระบบยืนยันตัวตน</a>
                                        </h5>
                                        <p>
                                            ช่วยทำให้เซิร์ฟเวอร์ของคุณปลอดภัยยิ่งขึ้นโดยการคัดกรองสมาชิก ก่อนเข้าร่วมเซิร์ฟเวอร์
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-12 animate__animated animate__fadeIn">
                                <div className="card card-blog card-background cursor-pointer card-hover-effect">
                                    <div className="full-background" style={{ backgroundImage: 'url("../assets/img/maprang3.png")' }} loading="lazy" />
                                    <div className="card-body">
                                        <div className="content-left text-start my-auto py-4">
                                            <h2 className="card-title text-white">และบริการอื่นๆ</h2>
                                            <p className="card-description text-white">ยังมีบริการอื่นๆอีกมากมายที่เรานั้นยังเก็บเป็นความลับให้คุณไปค้นหาด้วยตัวคนคุณเอง</p>
                                            <a href="https://docs.maprangbot.xyz/" className="text-white text-sm icon-move-right">อ่านเพิ่มเติม
                                                <i className="fas fa-arrow-right text-xs ms-1" />
                                            </a>
                                        </div>
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