//Kullanıcının uni bilgisi
// src/features/dashboard/components/UniversityInfo.jsx
import React from "react";

export default function UniversityInfo({ university }) {
    if (!university) {
        return <p>Üniversite seçilmedi.</p>;
    }

    return (
        <div className="university-info p-3 border rounded">
            <h4>{university.name}</h4>
            <p>{university.description}</p>
            <p><strong>Konum:</strong> {university.location}</p>
        </div>
    );
}
