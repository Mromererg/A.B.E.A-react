// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle, BoxArrowInRight } from "react-bootstrap-icons";
import { useAuth } from "../../context/AuthContext"; // Kendi auth context'in
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const { currentUser } = useAuth(); // login olan kullanıcıyı al
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth)
            .then(() => navigate("/"))
            .catch((err) => console.error("Çıkış hatası:", err));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span role="img" aria-label="logo" className="fs-4 me-2">📚</span>
                    <span className="fw-bold">ABEA</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Anasayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notes">Notlar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Hakkımızda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">İletişim</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        {currentUser ? (
                            <>
                                <PersonCircle size={24} className="me-2 text-light" />
                                <span className="me-3 text-light">
                                    {currentUser.displayName || currentUser.email}
                                </span>
                                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                                    Çıkış Yap
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-primary me-2 btn-sm" onClick={() => navigate("/login")}>
                                    <BoxArrowInRight className="me-1" /> Giriş Yap
                                </button>
                                <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/register")}>
                                    Kayıt Ol
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
