// src/pages/AIFinancialAdvisor.jsx
import React, { useState } from 'react';
import {Box, Button, Container, Grid} from '@mui/material';
import useFinancialData from '../hooks/useFinancialData';
import PageHeader from '../components/ai-advisor/PageHeader';
import FinancialSummaryCard from '../components/ai-advisor/FinancialSummaryCard';
import ProductRecommendationCard from '../components/ai-advisor/ProductRecommendationCard';
import AnalysisResultCard from '../components/ai-advisor/AnalysisResultCard';
import ActionButtons from '../components/ai-advisor/ActionButtons';

export default function AIFinancialAdvisor() {
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { dailyData } = useFinancialData();

    return (
        <Box sx={{
            bgcolor: '#F4F7FC',
            py: 6,
            minHeight: '100vh'
        }}>
            <Container maxWidth="xl">
                <PageHeader />

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <FinancialSummaryCard dailyData={dailyData} />
                    </Grid>

                    {!showAnalysis ? (
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 3,
                                    py: 8,
                                    width: '100%'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => setShowAnalysis(true)}
                                    sx={{
                                        px: 8,
                                        py: 3,
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        borderRadius: '50px',
                                        background: 'linear-gradient(135deg, #0046FF 0%, #0082FF 100%)',
                                        boxShadow: '0 4px 20px rgba(0, 70, 255, 0.3)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #0039CC 0%, #006ACC 100%)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 25px rgba(0, 70, 255, 0.4)',
                                        }
                                    }}
                                >
                                    AI 분석 시작하기
                                </Button>
                            </Box>
                        </Grid>
                    ) : (
                        <>
                            <Grid item xs={12} md={4}>
                                <ProductRecommendationCard
                                    selectedProduct={selectedProduct}
                                    onProductSelect={setSelectedProduct}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <AnalysisResultCard selectedProduct={selectedProduct} />
                            </Grid>
                        </>
                    )}
                </Grid>

                {selectedProduct && (
                    <ActionButtons />
                )}
            </Container>
        </Box>
    );
}