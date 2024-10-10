import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { ConfeitariaPage } from "../pages/confeitaria";
import { CongeladosPage } from "../pages/congelados";
import { Container } from 'react-bootstrap'
import { Navigation } from '../components/Navigation'
export function AppRoutes() {
    return (
        <>
            <Navigation />
            <Container className='mb-4'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/confeitaria" element={<ConfeitariaPage />} />
                    <Route path="/congelados" element={<CongeladosPage />} />
                </Routes>
            </Container>
        </>
    )
}