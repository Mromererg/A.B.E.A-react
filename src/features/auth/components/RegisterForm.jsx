// src/features/auth/components/RegisterForm.jsx

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../../../app/firebase";
import UniversitySelect from "../../universities/components/UniversitySelect";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [selectedUni, setSelectedUni] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== passwordConfirm) {
            setError("Şifreler eşleşmiyor.");
            return;
        }

        if (!selectedUni) {
            setError("Lütfen bir üniversite seçin.");
            return;
        }

        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;

            await set(ref(database, `kullanicilar/${userId}`), {
                email,
                universiteId: selectedUni,
                kayitTarihi: Date.now(),
            });

            alert("Kayıt başarılı!");
            // buraya yönlendirme ekleyebilirsin (navigate)

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Şifre (Tekrar)"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
            />

            <UniversitySelect
                selectedUni={selectedUni}
                setSelectedUni={setSelectedUni}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? "Kayıt olunuyor..." : "Kayıt Ol"}
            </button>
        </form>
    );
}

export default RegisterForm;
