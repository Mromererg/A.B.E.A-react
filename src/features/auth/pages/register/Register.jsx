// src/features/auth/pages/register/Register.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, onValue, set } from "firebase/database";
import { auth, database } from "../../../../app/firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [universities, setUniversities] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredUnis, setFilteredUnis] = useState([]);
    const [selectedUni, setSelectedUni] = useState("");

    const [error, setError] = useState("");
    const navigate = useNavigate();

    // 1️⃣ Üniversiteleri çek
    useEffect(() => {
        const uniRef = ref(database, "universiteler");
        const unsubscribe = onValue(uniRef, (snapshot) => {
            const data = snapshot.val() || {};
            const list = Object.entries(data).map(([id, obj]) => ({
                id,
                name: obj.name,
            }));
            setUniversities(list);
        });
        return () => unsubscribe();
    }, []);

    // 2️⃣ Filtreleme
    useEffect(() => {
        setFilteredUnis(
            universities.filter((u) =>
                u.name.toLowerCase().startsWith(filter.toLowerCase())
            )
        );
    }, [filter, universities]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirm) {
            setError("Şifreler eşleşmiyor.");
            return;
        }
        if (!selectedUni) {
            setError("Lütfen üniversite seçiniz.");
            return;
        }

        try {
            const cred = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const uid = cred.user.uid;
            await set(ref(database, `kullanicilar/${uid}`), {
                email,
                universiteId: selectedUni,
                kayitTarihi: Date.now(),
            });
            navigate("/dashboard");
        } catch (err) {
            setError("Kayıt başarısız: " + err.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 register-bg">
            <div
                className="card shadow-sm"
                style={{ width: "100%", maxWidth: "400px" }}
            >
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Kayıt Ol</h3>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        {/* E‑posta */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                E‑posta
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="email@ornek.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Şifre */}
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Şifre</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                             {showPassword ? <FaEyeSlash /> : <FaEye />}
                             </span>
                        </div>


                        {/* Şifre Tekrar */}
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Şifre</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                             </span>
                        </div>


                        {/* Üniversite */}
                        <div className="mb-4 position-relative">
                            <label htmlFor="university" className="form-label">
                                Üniversite
                            </label>
                            <input
                                id="university"
                                type="text"
                                className="form-control"
                                placeholder="Üniversite ara..."
                                value={filter}
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                    setSelectedUni("");
                                }}
                                required
                            />
                            {filteredUnis.length > 0 && (
                                <ul className="list-group position-absolute w-100 zindex-tooltip">
                                    {filteredUnis.map((u) => (
                                        <li
                                            key={u.id}
                                            className="list-group-item list-group-item-action"
                                            onClick={() => {
                                                setSelectedUni(u.id);
                                                setFilter(u.name);
                                                setFilteredUnis([]);
                                            }}
                                        >
                                            {u.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Kayıt Ol
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <small>
                            Hesabınız var mı?{" "}
                            <span
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={() => navigate("/login")}
                            >
                Giriş Yapın
              </span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
