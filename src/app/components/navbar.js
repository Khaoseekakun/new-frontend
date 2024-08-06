import Image from "next/image";
import Link from "next/link";

export default function navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light z-index-fixed top-0 border-radius-xl shadow my-3 py-2 mx-4">
            <div className="container-fluid px-0">

                <div className="flex">
                    <button className="navbar-toggler shadow-none ms-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mt-2">
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </span>
                    </button>

                    <a className="navbar-collapse font-weight-bolder ms-sm-3" href="/" rel="tooltip" title="Maprang Bot" data-placement="bottom">
                        <Image src="/logo.png" className="" width={2724} height={907} style={{ width: '12%', height: "auto" }} />
                    </a>
                </div>

                <div className="navbar-collapse pt-3 pb-2 py-lg-0 w-100 collapse" id="navigation" style={{}}>
                    <ul className="navbar-nav navbar-nav-hover ms-auto">
                        <li className="nav-item dropdown dropdown-hover mx-2">
                            <Link href={"/"} className="nav-link ps-2 d-flex cursor-pointer align-items-center">
                                <i className="fa-solid fa-house mx-2 "></i><span className="text-md">หน้าหลัก</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown dropdown-hover mx-2">
                            <Link href={"/service"} className="nav-link ps-2 d-flex cursor-pointer align-items-center">
                                <i className="fa-solid fa-briefcase mx-2 text-md"></i><span className="text-md">บริการของเรา</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown dropdown-hover mx-2">
                            <Link href={"/about"} className="nav-link ps-2 d-flex cursor-pointer align-items-center">
                                <i className="fa-solid fa-circle-info mx-2 text-md"></i><span className="text-md">เกี่ยวกับเรา</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown dropdown-hover mx-2">
                            <Link href={"/contact"} className="nav-link ps-2 d-flex cursor-pointer align-items-center">
                                <i className="fa-solid fa-phone-volume mx-2 text-md"></i><span className="text-md">ติดต่อเรา</span>
                            </Link>
                        </li>

                        <li className="nav-item my-auto ms-3 ms-lg-0">
                            <Link href={"/sign-up"} className="btn btn-sm btn-outline-info  mb-0 me-1 mt-2 mt-md-0">Sign-up</Link>
                            <Link href={"/login"} className="btn btn-sm btn-info  mb-0 me-1 mt-2 mt-md-0">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}