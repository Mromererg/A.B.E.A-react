//Son bildiriler
// src/features/dashboard/components/NotificationsPreview.jsx
import React from "react";

export default function NotificationsPreview({ notifications }) {
    if (!notifications || notifications.length === 0) {
        return <p>Bildirim yok.</p>;
    }

    return (
        <div className="notifications-preview p-3 border rounded">
            <h4>Bildirimler</h4>
            <ul className="list-unstyled">
                {notifications.slice(0, 5).map((notif, index) => (
                    <li key={index} className="mb-2">
                        <strong>{notif.title}</strong>: {notif.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}
