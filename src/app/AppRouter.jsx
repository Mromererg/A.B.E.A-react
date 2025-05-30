import { Routes, Route } from "react-router-dom";

// Dashboard ve alt sayfalar
import Dashboard from "../features/dashboard/Dashboard";
import DashboardOverview from "../features/dashboard/pages/DashboardOverview";
import NotesPage from "../features/dashboard/pages/NotesPage";
import NotificationsPage from "../features/dashboard/pages/NotificationsPage";
import UniversityPage from "../features/dashboard/pages/UniversityPage";
import ProfilePage from "../features/dashboard/pages/ProfilePage";

// Diğer sayfalar (dosya yollarına göre senin oluşturduğun yerlere göre ayarladım)
import Home from "../features/home/Home";               // Bunu sen oluşturmalısın
import Login from "../features/auth/pages/login/login";             // Bunu sen oluşturmalısın
import Register from "../features/auth/pages/register/Register";       // Bunu sen oluşturmalısın
import AboutPage from "../pages/AboutPage";             // Genel sayfa, pages/ altında varsaydım
import ContactPage from "../pages/ContactPage";         // Aynı şekilde pages/ altında

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />npm
            <Route path="/register" element={<Register />} />

            {/* Dashboard nested routes */}
            <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardOverview />} />       {/* /dashboard */}
                <Route path="notes" element={<NotesPage />} />        {/* /dashboard/notes */}
                <Route path="notifications" element={<NotificationsPage />} />
                <Route path="university" element={<UniversityPage />} />
                <Route path="profile" element={<ProfilePage />} />
            </Route>

            {/* Diğer ana rotalar */}
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Tanımsız rota yönlendirmesi */}
            <Route path="*" element={<Home />} />
        </Routes>
    );
}
