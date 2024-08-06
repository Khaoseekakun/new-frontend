export default function Footer() {
    return (
        <>

            <footer className="footer mt-5">
                <div className="container justify-content-center">
                    <div className="col-12">
                        <div className="text-center">
                            <div>
                                <img src="logo.png" className="mb-2" alt="main_logo" style={{ width: "10%" }} />
                            </div>
                            <div>
                                <ul className="d-flex justify-content-center ms-n3 nav">
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://www.facebook.com/maprang.astray" target="_blank">
                                            <i className="fab fa-facebook text-lg opacity-8" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://x.com/Maprang_Astray" target="_blank">
                                            <i className="fab fa-twitter text-lg opacity-8" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://www.youtube.com/@Maprang_Astray" target="_blank">
                                            <i className="fab fa-youtube text-lg opacity-8" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center text-center mt-2">
                        <div className="col-md-3 col-sm-6 col-6 mb-4">
                            <div>
                                <h6 className="text-sm">หน้าหลัก</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mb-4">
                            <div>
                                <h6 className="text-sm">บริการของเรา</h6>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-6 mb-4">
                            <div>
                                <h6 className="text-sm">เกี่ยวกับเรา</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mb-4 me-auto">
                            <div>
                                <h6 className="text-sm">ติดต่อเรา</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">

                        <p className="text-dark text-sm font-weight-normal">
                            All rights reserved. Copyright © by <a href="https://facebook.com/KhaoSeekakun" target="_blank">Khao Seekakun</a>.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
