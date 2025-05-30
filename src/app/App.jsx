// src/app/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import AppRouter from "./AppRouter";

function App() {
    return (
        <Router>
            <Navbar />      {/* <-- Burada yalnızca bir kez */}
            <AppRouter />
        </Router>
    );
}

export default App;
