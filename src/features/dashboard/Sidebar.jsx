import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <h4 className="mb-4">Dashboard Menu</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="" end className="nav-link">Overview</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="profile" className="nav-link">Profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="university" className="nav-link">University</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="notifications" className="nav-link">Notifications</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="notes" className="nav-link">Notes</NavLink>
                </li>
            </ul>
        </div>
    );
}
