import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Alert,
    Paper,
    useTheme
} from '@mui/material';
import { Analytics, Timer } from '@mui/icons-material';
import useFinancialData from '../hooks/useFinancialData';
import PageHeader from '../components/ai-advisor/PageHeader';
import FinancialSummaryCard from '../components/ai-advisor/FinancialSummaryCard';
import ProductRecommendationCard from '../components/ai-advisor/ProductRecommendationCard';
import AnalysisResultCard from '../components/ai-advisor/AnalysisResultCard';
import ActionButtons from '../components/ai-advisor/ActionButtons';
import LoadingOverlay from '../components/common/LoadingOverlay';

const DAILY_USAGE_LIMIT = 5; // 5회로 증가

// 사용 횟수 표시 컴포넌트
const UsageCounter = ({ usedCount, totalCount }) => {
    const theme = useTheme();

    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                mb: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid',
                borderColor: 'rgba(0, 70, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Timer sx={{ color: '#0046FF', fontSize: 40 }} />
                <Box>
                    <Typography variant="h6" gutterBottom>
                        오늘의 AI 분석
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        매일 5회 무료로 AI 자산 분석을 받아보실 수 있습니다
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 200
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    mb: 1
                }}>
                    {Array.from({ length: totalCount }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                backgroundColor: index < (totalCount - usedCount)
                                    ? '#0046FF'
                                    : 'rgba(0, 70, 255, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                transform: index < (totalCount - usedCount)
                                    ? 'scale(1)'
                                    : 'scale(0.8)',
                                boxShadow: index < (totalCount - usedCount)
                                    ? '0 2px 8px rgba(0, 70, 255, 0.3)'
                                    : 'none'
                            }}
                        >
                            <Analytics sx={{
                                fontSize: 14,
                                color: index < (totalCount - usedCount)
                                    ? 'white'
                                    : 'rgba(0, 70, 255, 0.4)'
                            }} />
                        </Box>
                    ))}
                </Box>
                <Typography
                    variant="subtitle2"
                    color={usedCount >= totalCount ? "error.main" : "primary"}
                    sx={{ fontWeight: 'bold' }}
                >
                    {usedCount >= totalCount
                        ? "오늘 분석이 모두 소진되었습니다"
                        : `남은 분석 횟수: ${totalCount - usedCount}회`
                    }
                </Typography>
            </Box>
        </Paper>
    );
};

export default function AIFinancialAdvisor() {
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [usageCount, setUsageCount] = useState(0);
    const [error, setError] = useState(null);
    const { dailyData } = useFinancialData();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const storedUsage = JSON.parse(localStorage.getItem('aiAdvisorUsage') || '{}');

        if (storedUsage.date !== today) {
            localStorage.setItem('aiAdvisorUsage', JSON.stringify({
                date: today,
                count: 0
            }));
            setUsageCount(0);
        } else {
            setUsageCount(storedUsage.count || 0);
        }
    }, []);

    const updateUsageCount = () => {
        const today = new Date().toISOString().split('T')[0];
        const newCount = usageCount + 1;
        localStorage.setItem('aiAdvisorUsage', JSON.stringify({
            date: today,
            count: newCount
        }));
        setUsageCount(newCount);
    };

    const handleAnalysisStart = async () => {
        if (usageCount >= DAILY_USAGE_LIMIT) {
            setError('일일 사용 가능 횟수를 모두 사용하셨습니다. 내일 다시 이용해주세요.');
            return;
        }

        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            updateUsageCount();
            setShowAnalysis(true);
        } catch (err) {
            setError('분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box sx={{
            bgcolor: '#F4F7FC',
            py: 6,
            minHeight: '100vh',
            position: 'relative'
        }}>
            <Container maxWidth="xl">
                <PageHeader />

                <UsageCounter usedCount={usageCount} totalCount={DAILY_USAGE_LIMIT} />

                {error && (
                    <Alert
                        severity="error"
                        sx={{
                            mb: 3,
                            borderRadius: 2,
                            '& .MuiAlert-icon': {
                                fontSize: 28
                            }
                        }}
                        onClose={() => setError(null)}
                    >
                        {error}
                    </Alert>
                )}

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <FinancialSummaryCard dailyData={dailyData} />
                    </Grid>

                    {!showAnalysis ? (
                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 3,
                                py: 8,
                                width: '100%'
                            }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleAnalysisStart}
                                    disabled={usageCount >= DAILY_USAGE_LIMIT || isLoading}
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
                                        },
                                        '&:disabled': {
                                            background: '#ccc',
                                            transform: 'none',
                                            boxShadow: 'none'
                                        }
                                    }}
                                >
                                    <Analytics sx={{ mr: 2 }} />
                                    AI 자산 분석 시작하기
                                </Button>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    align="center"
                                    sx={{ maxWidth: 600 }}
                                >
                                    AI가 고객님의 자산 현황을 분석하여 맞춤형 금융 상품을 추천해드립니다
                                </Typography>
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

                {selectedProduct && <ActionButtons />}
            </Container>

            {isLoading && (
                <LoadingOverlay message="AI가 고객님의 데이터를 분석중입니다..." />
            )}
        </Box>
    );
}