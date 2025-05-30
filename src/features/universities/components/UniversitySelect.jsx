// src/features/universities/components/UniversitySelect.jsx
import React, { useEffect, useState } from "react";
import { fetchUniversities } from "../universityService";

function UniversitySelect({ selectedUni, setSelectedUni }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        fetchUniversities(setUniversities);
    }, []);

    // Filtreleme: arama kutusundaki yazıya göre üniversite listesi
    const filteredUnis = universities.filter(uni =>
        uni.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Üniversite ara..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <select
                value={selectedUni}
                onChange={e => setSelectedUni(e.target.value)}
            >
                <option value="">Üniversite seçiniz</option>
                {filteredUnis.map(uni => (
                    <option key={uni.id} value={uni.id}>
                        {uni.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default UniversitySelect;
