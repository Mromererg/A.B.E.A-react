// src/features/auth/pages/login/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../app/firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            setError("Giriş başarısız: " + err.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 login-bg">
            <div className="card shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Giriş Yap</h3>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-posta</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Şifre</label>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowPassword((v) => !v)}
                            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Giriş Yap
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <small>
                            Hesabınız yok mu?{" "}
                            <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>
                Kaydolun
              </span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
