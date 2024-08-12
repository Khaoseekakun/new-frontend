'use client'
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navigation = document.getElementById("navigation");
            const navbarToggler = document.querySelector(".navbar-toggler");
            if (
                navigation.classList.contains("show") &&
                !navigation.contains(event.target) &&
                !navbarToggler.contains(event.target)
            ) {
                navbarToggler.click();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        if (navbarToggler && navbarToggler.getAttribute("aria-expanded") === "true") {
            navbarToggler.click();
        }
    };

    return (
        <>
            <nav className="animate__animated animate__backInDown navbar fixed-top navbar-expand-lg navbar-light bg-light z-index-fixed top-0 border-radius-xl shadow my-3 py-2 mx-4">
                <div className="container-fluid row px-0">
                    <div className="d-flex col-3 align-items-center">
                        <button className="navbar-toggler shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon ">
                                <span className="navbar-toggler-bar bar1" />
                                <span className="navbar-toggler-bar bar2" />
                                <span className="navbar-toggler-bar bar3" />
                            </span>
                        </button>
                        <a className="px-2 font-weight-bolder d-none d-md-block" href="/" rel="tooltip" title="Maprang Bot" data-placement="bottom">
                            <Image src="/logo.png" className="" width={2724} height={907} style={{ width: '100px', height: "auto" }} />
                        </a>
                    </div>
                    <div className="d-flex col-9">
                        <div className="navbar-collapse  py-lg-0 collapse" id="navigation">
                            <ul className="navbar-nav navbar-nav-hover ms-auto mt-3">
                                <li className="nav-item mx-1 card-hover-effect">
                                    <Link href={"/"} className="nav-link ps-2 d-flex cursor-pointer align-items-center" onClick={handleLinkClick}>
                                        <i className="fa-solid fa-house mx-2 "></i><span className="text-md">หน้าหลัก</span>
                                    </Link>
                                </li>
                                <li className="nav-item mx-1 card-hover-effect">
                                    <Link href={"/service"} className="nav-link ps-2 d-flex cursor-pointer align-items-center" onClick={handleLinkClick}>
                                        <i className="fa-solid fa-briefcase mx-2 text-md"></i><span className="text-md">บริการของเรา</span>
                                    </Link>
                                </li>
                                <li className="nav-item mx-1 card-hover-effect">
                                    <Link href={"/about"} className="nav-link ps-2 d-flex cursor-pointer align-items-center" onClick={handleLinkClick}>
                                        <i className="fa-solid fa-circle-info mx-2 text-md"></i><span className="text-md">เกี่ยวกับเรา</span>
                                    </Link>
                                </li>
                                <li className="nav-item mx-1 card-hover-effect">
                                    <Link href={"/contact"} className="nav-link ps-2 d-flex cursor-pointer align-items-center" onClick={handleLinkClick}>
                                        <i className="fa-solid fa-phone-volume mx-2 text-md"></i><span className="text-md">ติดต่อเรา</span>
                                    </Link>
                                </li>
                                <li className="nav-item mx-1 card-hover-effect">
                                    <Link href={"/sign-up"} className="btn col-sm-12 col-12 btn-outline-info" onClick={handleLinkClick}>Sign-up</Link>
                                </li>
                                <li className="nav-item mx-1 card-hover-effect">
                                    <Link href={"/login"} className="btn col-sm-12 col-12 btn-info" onClick={handleLinkClick}>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
