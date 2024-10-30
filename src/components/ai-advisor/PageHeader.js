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
            {/* 배경 장식 요소 개선 */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    background: `
                    radial-gradient(circle at 20% 30%, white 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, white 0%, transparent 30%),
                    radial-gradient(circle at 40% 80%, white 0%, transparent 40%),
                    radial-gradient(circle at 70% 20%, white 0%, transparent 35%)
                `,
                }}
            />

            {/* 추가 배경 효과 */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0,
                            mb: 3
                        }}
                    >
                        {/* 로고 이미지 */}
                        <img
                            src="/images/shinhan.png"
                            alt="신한은행 로고"
                            style={{
                                width: 480,
                                height: 480,
                                objectFit: 'contain',
                                marginBottom: '-7rem'
                            }}
                        />

                        {/* 타이틀 컨테이너 */}
                        <Box
                            sx={{
                                position: 'relative',
                                padding: '0 0'
                            }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '4.5rem' },
                                    fontWeight: 800,
                                    color: 'white',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    letterSpacing: '0.05em',
                                    position: 'relative',
                                    display: 'inline-block',
                                    lineHeight: 1.2
                                }}
                            >
                                AI ONE Touch
                                <Box
                                    component="span"
                                    sx={{
                                        position: 'absolute',
                                        top: -15,
                                        right: -50,
                                        fontSize: '1.1rem',
                                        backgroundColor: 'white',
                                        color: '#0046FF',
                                        padding: '6px 16px',
                                        borderRadius: '14px',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        transform: 'rotate(15deg)',
                                        letterSpacing: '0'
                                    }}
                                >
                                    NEW
                                </Box>
                            </Typography>

                            {/* 밑줄 효과 */}
                            <Box
                                sx={{
                                    width: '120px',
                                    height: '4px',
                                    background: 'white',
                                    borderRadius: '2px',
                                    opacity: 0.8,
                                    margin: '1rem auto 0'
                                }}
                            />
                        </Box>
                    </Box>

                    {/* 서브타이틀 */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 400,
                            maxWidth: '800px',
                            margin: '0 auto',
                            padding: '1.2rem 2.5rem',
                            backdropFilter: 'blur(4px)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.2rem', md: '1.4rem' }
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
                                    p: 3,
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        mb: 2,
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                >
                                    {feature.icon}
                                </Box>
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