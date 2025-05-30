import React from "react";

export default function ProfilePage() {
    return (
        <div>
            <h2 className="mb-4">Profil Bilgileri</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Kullanıcı Adı: Ali Yılmaz</h5>
                    <p className="card-text">E-posta: ali@example.com</p>
                    <button className="btn btn-primary">Profili Düzenle</button>
                </div>
            </div>
        </div>
    );
}
