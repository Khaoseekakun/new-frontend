export default function Contact() {
    return (
        <>
            <br />
            <br />
            <section className="py-lg-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card box-shadow-xl overflow-hidden mb-5">
                                <div className="row">
                                    {/* Left Column - Contact Information */}
                                    <div className="col-lg-5 position-relative bg-cover px-0 animate__animated animate__fadeInLeft" 
                                         style={{ backgroundImage: 'url("../assets/img/maprang2.webp")' }} 
                                         loading="lazy">
                                        <div className="z-index-2 text-center d-flex h-100 w-100 m-auto justify-content-center">
                                            <div className="mask bg-gradient-dark opacity-8" />
                                            <div className="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                                                <h3 className="text-white card-hover-effect">ข้อมูลในการติดต่อ</h3>
                                                <p className="text-white opacity-8 mb-4">
                                                    ติดต่อสอบถามเกี่ยวกับงานของศิลปิน เพื่อร่วมงานด้วยกัน, สปอนเซอร์ และอื่นๆ ที่เกี่ยวข้องกับศิลปินของ Astray Entertainment
                                                </p>
                                                <div className="d-flex p-2 text-white">
                                                    <div>
                                                        <i className="fas fa-phone text-sm" />
                                                    </div>
                                                    <div className="ps-3">
                                                        <span className="text-sm opacity-8">(+66) 0993817763</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex p-2 text-white">
                                                    <div>
                                                        <i className="fas fa-envelope text-sm" />
                                                    </div>
                                                    <div className="ps-3">
                                                        <span className="text-sm opacity-8">manager@astraystudios.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Contact Form */}
                                    <div className="col-lg-7">
                                        <form className="p-3" id="contact-form" method="post">
                                            <div className="card-header px-4 py-sm-5 py-3 animate__animated animate__fadeInRight">
                                                <h2 className="card-hover-effect">ติดต่อเรา</h2>
                                            </div>
                                            <div className="card-body pt-1">
                                                <div className="row">
                                                    <div className="col-md-12 pe-2 mb-3 animate__animated animate__fadeInUp">
                                                        <div className="input-group input-group-static mb-4">
                                                            <label>ชื่อ</label>
                                                            <input type="text" className="form-control" placeholder="ชื่อเต็มของคุณ" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pe-2 mb-3 animate__animated animate__fadeInUp">
                                                        <div className="input-group input-group-static mb-4">
                                                            <label>หัวข้อ</label>
                                                            <input type="text" className="form-control" placeholder="หัวข้อในการติดต่อ" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pe-2 mb-3 animate__animated animate__fadeInUp">
                                                        <div className="input-group input-group-static mb-4">
                                                            <label>ข้อความ</label>
                                                            <textarea name="message" className="form-control" id="message" rows={6} placeholder="โปรดระบุข้อความ" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 text-end ms-auto animate__animated animate__fadeInUp">
                                                        <button type="submit" className="btn bg-gradient-info mb-0">ส่งข้อความ</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}