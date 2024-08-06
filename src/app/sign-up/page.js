'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('รหัสผ่านไม่ตรงกัน');
        } else {
            setError('');
            console.log('Form submitted');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="card p-4 shadow-sm" style={{ width: '35rem' }}>
                    <h2 className="card-title text-center mb-4">สมัครสมาชิก</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                <i className="fa-solid fa-user mx-2"></i>ชื่อผู้ใช้
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="form-control p-2"
                                style={{ backgroundColor: '#e7ecff' }}
                                placeholder="ชื่อผู้ใช้"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <i className="fa-solid fa-at mx-2"></i>อีเมล
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control p-2"
                                style={{ backgroundColor: '#e7ecff' }}
                                placeholder="sample@gmail.com"
                            />
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">
                                <i className="fa-solid fa-lock mx-2"></i>รหัสผ่าน
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control p-2"
                                style={{ backgroundColor: '#e7ecff' }}
                                placeholder="รหัสผ่าน"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="position-absolute end-0 translate-middle-y me-3"
                                style={{ cursor: 'pointer', top: '55px' }}
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </span>
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="Confirm_password" className="form-label">
                                <i className="fa-solid fa-lock mx-2"></i>ยืนยันรหัสผ่าน
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="Confirm_password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="form-control p-2"
                                style={{ backgroundColor: '#e7ecff' }}
                                placeholder="รหัสยืนยัน"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="position-absolute end-0 translate-middle-y me-3"
                                style={{ cursor: 'pointer', top: '55px' }}
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </span>
                        </div>
                        {error && <div className="text-danger mb-3 text-center">{error}</div>}
                        <button type="submit" className="btn btn-info w-100">สมัคร</button>
                        <p className="mt-3">ฉันมีบัญชีแล้ว? <Link href="/login">เข้าสู่ระบบ</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
