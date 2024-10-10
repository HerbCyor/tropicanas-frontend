import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { ConfeitariaPage } from "../pages/confeitaria";
import { CongeladosPage } from "../pages/congelados";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confeitaria" element={<ConfeitariaPage />} />
            <Route path="/congelados" element={<CongeladosPage />} />
        </Routes>
    )
}