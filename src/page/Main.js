// src/pages/MainPage.js
import React from 'react';
import { Box } from '@mui/material';

// Layout Components
import Header from '../components/layout/Header';
import MobileDrawer from '../components/layout/MobileDrawer';
import MainNavigation from '../components/layout/MainNavigation';
import Footer from '../components/layout/Footer';

// Section Components
import HeroBanner from '../components/sections/HeroBanner';
import FinancialProducts from '../components/sections/FinancialProducts';
import NewsSection from '../components/sections/NewsSection';
import RecommendedProducts from '../components/sections/RecommendedProducts';

const MainPage = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <MobileDrawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
            />
            <MainNavigation
                value={tabValue}
                onChange={(e, newValue) => setTabValue(newValue)}
            />
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',  // 섹션 간의 기본 간격
                marginBottom: '6rem' // 푸터와의 간격
            }}>
                <HeroBanner />
                <FinancialProducts />
                <NewsSection />
                <RecommendedProducts />
            </main>
            <Footer />
        </Box>
    );
};

export default MainPage;