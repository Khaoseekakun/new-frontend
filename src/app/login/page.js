'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="card p-4 shadow-sm" style={{ width: '35rem' }}>
                    <h2 className="card-title text-center mb-4">เข้าสู่ระบบ</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
                            <input type="text" id="username" className="form-control p-2" style={{ backgroundColor: '#e7ecff' }} placeholder="ชื่อผู้ใช้"/>
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                            <input type={showPassword ? "text" : "password"} id="password" className="form-control p-2" style={{ backgroundColor: '#e7ecff' }} placeholder="รหัสผ่าน"/>
                            <span
                                onClick={togglePasswordVisibility}
                                className="position-absolute end-0 translate-middle-y me-3"
                                style={{ cursor: 'pointer', top: '55px' }}
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </span>
                        </div>
                        <button type="submit" className="btn btn-info w-100">เข้าสู่ระบบ</button>
                        <p>ยังไม่มีบัญชี? <Link href="/sign-up">สมัครสมาชิก</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
