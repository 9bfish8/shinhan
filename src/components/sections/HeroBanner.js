import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import {useNavigate} from "react-router-dom";

const HeroBanner = () => {
    const navigate = useNavigate();  // 네비게이션 훅 사용

    // 버튼 클릭 핸들러 함수
    const handleButtonClick = (text) => {
        if (text === 'AI서비스') {
            navigate('/ai-advisor');  // AI 서비스 페이지로 이동
        }
        // 다른 버튼들의 핸들러도 여기에 추가할 수 있습니다
    };

    return (
        <Box sx={{ bgcolor: 'primary.light', py: 6 }}>
            <Container>
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            고객과 함께하는 상생금융
                        </Typography>
                        <Typography variant="h6" paragraph>
                            어려울 떄일수록 고객에게 힘이되는,<br />
                            상생금융으로 함께하겠습니다
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {['조회', '이체', '인증센터', 'AI서비스'].map((text, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    color="secondary"
                                    endIcon={<ArrowForward />}
                                    sx={{ borderRadius: 28 }}
                                    onClick={() => handleButtonClick(text)}
                                >
                                    {text}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            alt="이미지구역"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroBanner;
