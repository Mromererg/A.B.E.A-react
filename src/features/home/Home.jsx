// src/features/home/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-bg text-light">
            {/* HERO SECTION */}
            <section className="text-center py-5">
                <h1 className="display-4 fw-bold">Akademik Bilgi Erişim Ağı</h1>
                <p className="lead mt-3">
                    Notlarınızı paylaşın, bilgiyi çoğaltın, topluluğun bir parçası olun.
                </p>
                <div className="mt-4">
                    <button className="btn btn-primary me-3" onClick={() => navigate("/login")}>
                        Giriş Yap
                    </button>
                    <button className="btn btn-outline-light" onClick={() => navigate("/register")}>
                        Kayıt Ol
                    </button>
                </div>
            </section>

            {/* ÖZELLİKLER */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark text-light h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">🎓 Üniversiteye Özel İçerikler</h5>
                                <p className="card-text">
                                    Kendi okuluna özel notlara ve kaynaklara kolayca ulaş.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark text-light h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">📚 Not ve Kaynak Paylaşımı</h5>
                                <p className="card-text">
                                    Kendi notlarını paylaş, diğer öğrencilere katkı sağla.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark text-light h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">🤝 Akademik Topluluk</h5>
                                <p className="card-text">
                                    Soru sor, cevapla, fikir alışverişinde bulun.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* İSTATİSTİKLER */}
            <footer className="text-center py-4 border-top border-light mt-5">
                <p>📄 1200+ not paylaşıldı | 🏛️ 40+ üniversite | 👨‍🎓 500+ öğrenci kayıtlı</p>
                <small>© 2025 Akademik Bilgi Erişim Ağı</small>
            </footer>
        </div>
    );
}

export default Home;
