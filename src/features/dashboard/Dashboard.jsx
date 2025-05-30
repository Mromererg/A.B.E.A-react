import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar - 3 kolon */}
                <div className="col-md-3 bg-light min-vh-100 p-3">
                    <Sidebar />
                </div>

                {/* Main Content - 9 kolon */}
                <div className="col-md-9 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
