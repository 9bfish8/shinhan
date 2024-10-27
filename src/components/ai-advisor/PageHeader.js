// src/components/ai-advisor/PageHeader.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { Assessment, Timeline, TrendingUp, Security } from '@mui/icons-material';

const PageHeader = () => {
    const features = [
        {
            icon: <Assessment sx={{ fontSize: 40, color: 'rgba(255, 255, 255, 0.9)' }} />,
            title: '실시간 분석',
            description: '금융 데이터 실시간 모니터링'
        },
        {
            icon: <Timeline sx={{ fontSize: 40, color: 'rgba(255, 255, 255, 0.9)' }} />,
            title: 'AI 예측',
            description: '맞춤형 금융상품 추천'
        },
        {
            icon: <TrendingUp sx={{ fontSize: 40, color: 'rgba(255, 255, 255, 0.9)' }} />,
            title: '수익률 분석',
            description: '예상 수익률 시뮬레이션'
        },
        {
            icon: <Security sx={{ fontSize: 40, color: 'rgba(255, 255, 255, 0.9)' }} />,
            title: '안전한 금융',
            description: '보안 인증된 금융 서비스'
        }
    ];

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #0046FF 0%, #0082FF 100%)',
                borderRadius: '0 0 30px 30px',
                py: 6,
                mb: 6,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* 배경 장식 요소 */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    background: `
                        radial-gradient(circle at 20% 30%, white 0%, transparent 10%),
                        radial-gradient(circle at 80% 70%, white 0%, transparent 10%),
                        radial-gradient(circle at 40% 80%, white 0%, transparent 8%),
                        radial-gradient(circle at 70% 20%, white 0%, transparent 8%)
                    `,
                }}
            />

            <Container maxWidth="xl">
                {/* 메인 헤더 텍스트 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: 'white',
                            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        }}
                    >
                        AI 금융 어드바이저
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 400,
                            maxWidth: '800px',
                            margin: '0 auto',
                        }}
                    >
                        실시간 금융 데이터 분석을 통한 맞춤형 금융상품 추천
                    </Typography>
                </Box>

                {/* 특징 그리드 */}
                <Grid container spacing={3} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={6} sm={3} key={index}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 2,
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 2,
                                    backdropFilter: 'blur(10px)',
                                    transition: 'transform 0.2s, background-color 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                                    }
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        mb: 1
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.8)'
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PageHeader;