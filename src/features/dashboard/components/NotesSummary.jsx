//toplam not sayısı son paylaşılan not
// src/features/dashboard/components/NotesSummary.jsx
import React from "react";

export default function NotesSummary({ notes }) {
    if (!notes || notes.length === 0) {
        return <p>Henüz hiç not yok.</p>;
    }

    const latestNote = notes[notes.length - 1];

    return (
        <div className="notes-summary p-3 border rounded">
            <h4>Notlarınız</h4>
            <p>Toplam Not Sayısı: {notes.length}</p>
            <p>Son Eklenen Not: <strong>{latestNote.title}</strong></p>
        </div>
    );
}
