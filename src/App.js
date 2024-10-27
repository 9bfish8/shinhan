// App.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import MobileDrawer from './components/layout/MobileDrawer';
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';
import AIFinancialAdvisor from "./pages/AIFinancialAdvisor";
import HeroBanner from "./components/sections/HeroBanner";
import FinancialProducts from "./components/sections/FinancialProducts";
import NewsSection from "./components/sections/NewsSection";
import RecommendedProducts from "./components/sections/RecommendedProducts";

// Pages

// Main Page Components
const MainContent = () => {
    const [tabValue, setTabValue] = useState(0);

    return (
        <>
            <MainNavigation
                value={tabValue}
                onChange={(e, newValue) => setTabValue(newValue)}
            />
            <main>
                <HeroBanner />
                <FinancialProducts />
                <NewsSection />
                <Box sx={{ mb: 8 }}>
                    <RecommendedProducts />
                </Box>
            </main>
        </>
    );
};

const App = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <BrowserRouter>
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                <Header handleDrawerToggle={handleDrawerToggle} />
                <MobileDrawer
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/ai-advisor" element={<AIFinancialAdvisor />} />
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    );
};

export default App;